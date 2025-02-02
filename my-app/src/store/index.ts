import { configureStore } from "@reduxjs/toolkit";
import selectedMovieSlice from "./selectedMovieSlice";
import searchSlice from "./seacrhSlice";
import filterSlice from "./filterSlice";
import filterCountriesGenresSlice from "./filterCountriesGenresSlice";
import activeSlice from "./activeSlice";

const indexStore = configureStore({
  reducer: {
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
