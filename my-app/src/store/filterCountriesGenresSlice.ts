import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getFilters = createAsyncThunk(
  "filterCountriesGenres/getFilters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`,
        {
          method: "GET",
          headers: {
              // "X-API-KEY": "001f728f-d136-4421-b634-bd64dfd6b5b6",
            // "X-API-KEY": "931765dc-e4c2-4101-9b85-2010f8f61aeb",
            // 'X-API-KEY': '4fcf068e-6b44-4edf-9d77-2cdda60848e4',
            'X-API-KEY': '5514a0c8-e19c-4904-ab50-80b6b9444dfe',
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const filterCountriesGenresSlice = createSlice({
  name: "filterCountriesGenres",
  initialState: {
    loading: false,
    error: null as string | null,
    countries: [],
    genres: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload.countries;
        state.genres = action.payload.genres;
      })
      .addCase(getFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default filterCountriesGenresSlice.reducer;
