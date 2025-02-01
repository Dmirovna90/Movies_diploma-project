import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const searchMovies = createAsyncThunk(
  "seacrh/searchMovies",
  async (objectFromSearch, { rejectWithValue }) => {
    const { keyword }: any = objectFromSearch;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`,
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
      return data.films;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
const seacrhSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    loading: false,
    error: null as string | null,
    type: "",
    total: 0,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.total = action.payload.lenght;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setSearchQuery } = seacrhSlice.actions;
export default seacrhSlice.reducer;
