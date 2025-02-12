import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    setnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    settopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  setnowPlayingMovies,
  setpopularMovies,
  settopRatedMovies,
  setupcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
