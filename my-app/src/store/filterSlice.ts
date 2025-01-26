import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const filterMovies = createAsyncThunk(
  "filter/filterMovies",
  async (objectFromFilter, { rejectWithValue }) => {
    const { genres, countries, order, type }: any = objectFromFilter;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=${countries}&genres=${genres}&order=${order}&type=${type}&ratingFrom=6&ratingTo=10&yearFrom=2002&yearTo=2024&page=2`,
        {
          method: "GET",
          headers: {
            //   "X-API-KEY": "001f728f-d136-4421-b634-bd64dfd6b5b6",
            "X-API-KEY": "931765dc-e4c2-4101-9b85-2010f8f61aeb",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    results: [],
    loading: false,
    error: null as string | null,
    type: "",
    total: 0,
    countries: [],
    genres: [],
    order: "",
  },
  reducers: {
    setOrdering: (state, action) => {
      state.order = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.total = action.payload.lenght;
      })
      .addCase(filterMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setOrdering, setType } = filterSlice.actions;
export default filterSlice.reducer;
