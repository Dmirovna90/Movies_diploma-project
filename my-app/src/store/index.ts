import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import selectedMovieSlice from "./selectedMovieSlice";
import searchSlice from "./seacrhSlice";
import filterSlice from "./filterSlice";
import filterCountriesGenresSlice from "./filterCountriesGenresSlice";
import activeSlice from "./activeSlice";

const indexStore = configureStore({
  reducer: {
    movies: moviesSlice,
    movie: selectedMovieSlice,
    search: searchSlice,
    filter: filterSlice,
    filterCountriesGenres: filterCountriesGenresSlice,
    active: activeSlice,
  },
});
export type AppDispatch = typeof indexStore.dispatch;
export type RootState = ReturnType<typeof indexStore.getState>;
export default indexStore;
