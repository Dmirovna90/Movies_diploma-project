import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMovie, IObjectFromSearch, ISearch } from "../types/types";

export const searchMovies = createAsyncThunk<
  {
    lenght: number;
    films: IMovie[];
  },
  IObjectFromSearch
>("seacrh/searchMovies", async (objectFromSearch, { rejectWithValue }) => {
  const { keyword }: any = objectFromSearch;
  try {
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`,
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
    return data.films;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const initialState: ISearch = {
  results: [],
  loading: false,
  error: null as string | null,
  type: "",
  total: 0,
  searchQuery: "",
};

const seacrhSlice = createSlice({
  name: "search",
  initialState,
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
