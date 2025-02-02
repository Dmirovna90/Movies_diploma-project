import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFilter } from "../types/types";
export const getFilters = createAsyncThunk(
  "filterCountriesGenres/getFilters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`,
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
  }
);

const initialState: IFilter= {
  loading: false,
  error: null as string | null,
  countries: [],
  genres: [],
}
const filterCountriesGenresSlice = createSlice({
  name: "filterCountriesGenres",
  initialState,
  // initialState: {
  //   loading: false,
  //   error: null as string | null,
  //   countries: [],
  //   genres: [],
  // },
  reducers: {},
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
