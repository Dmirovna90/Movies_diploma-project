import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getMovieInfo = createAsyncThunk(
  "movie/getMovieInfo",
  async (objectFromMoviePage, { rejectWithValue }) => {
    const { kinopoiskId }: any = objectFromMoviePage;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "001f728f-d136-4421-b634-bd64dfd6b5b6",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
const selectedMovieSlice = createSlice({
  name: "movie",
  initialState: {
    movieInfo: {
      kinopoiskId: 0,
      nameRu: "",
      nameOriginal: "",
      posterUrl: "",
      reviewsCount: 0,
      ratingKinopoisk: 0,
      ratingKinopoiskVoteCount: 0,
      year: 0,
      filmLength: 0,
      slogan: "",
      description: "",
      countries: [],
      genres: [],
      country: '',
      genre: '',
    },
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.movieInfo = action.payload;
      })
      .addCase(getMovieInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default selectedMovieSlice.reducer;
