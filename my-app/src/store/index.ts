import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import selectedMovieSlice from "./selectedMovieSlice";
import searchSlice from "./seacrhSlice";
import filterSlice from './filterSlice'
import filterCountriesGenresSlice from './filterCountriesGenresSlice'
export default configureStore({
  reducer: {
    movies: moviesSlice,
    movie: selectedMovieSlice,
    search: searchSlice,
    filter: filterSlice,
    filterCountriesGenres: filterCountriesGenresSlice,
  },
});
