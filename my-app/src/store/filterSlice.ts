import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilterSlice, IMovie, IObjectFromFilter } from "../types/types";
export const filterMovies = createAsyncThunk<
  { total: number; totalPages: number; items: IMovie[] },
  IObjectFromFilter
>("filter/filterMovies", async (objectFromFilter, { rejectWithValue }) => {
  const { genre, country, order, type, yearFrom, yearTo, page }: any =
    objectFromFilter;
  try {
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=${country}&genres=${genre}&order=${order}&type=${type}&ratingFrom=4&ratingTo=9.2&yearFrom=${yearFrom}&yearTo=${yearTo}&page=${page}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "001f728f-d136-4421-b634-bd64dfd6b5b6",
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
});
const initialState: IFilterSlice = {
  results: [],
  loading: false,
  error: null as string | null,
  type: "",
  totalItems: 0,
  currentPage: 1,
  order: "",
  countryId: "",
  genreId: "",
  yearTo: 2025,
  yearFrom: 1980,
  currentSlider: 1,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setOrdering: (state, action) => {
      state.order = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCountries: (state, action) => {
      state.countryId = action.payload;
    },
    setGenres: (state, action) => {
      state.genreId = action.payload;
    },
    setYear: (state, action) => {
      state.yearTo = action.payload;
      state.yearFrom = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSlider: (state, action) => {
      state.currentSlider = action.payload;
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
        state.results = action.payload.items;
        state.totalItems = action.payload.total;
      })
      .addCase(filterMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const {
  setOrdering,
  setType,
  setCountries,
  setGenres,
  setYear,
  setPage,
  setSlider,
} = filterSlice.actions;
export default filterSlice.reducer;
