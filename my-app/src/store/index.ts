import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlise";
import selectedMovieSlice from "./selectedMovieSlice";
export default configureStore({
  reducer: {
    movies: moviesSlice,
    movie: selectedMovieSlice,
  },
});
