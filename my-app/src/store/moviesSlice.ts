import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (objectFromMoviesPage, { rejectWithValue }) => {
    const { type, page }: any = objectFromMoviesPage;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${type}&page=${page}`,
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
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null as string | null,
    type: "",
    totalItems: 0,
    currentPage: 1,
    ordering: "",
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.items;
        state.totalItems = action.payload.total;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setPage, setOrdering } = moviesSlice.actions;
export default moviesSlice.reducer;
