import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    aiMovieRecommendation: null,
    searchedMovies: null,
  },
  reducers: {
    setShowGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setAiMovieRecommendation: (state, action) => {
      state.aiMovieRecommendation = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { setShowGptSearch, setAiMovieRecommendation, setSearchedMovies } =
  gptSearchSlice.actions;

export default gptSearchSlice.reducer;
