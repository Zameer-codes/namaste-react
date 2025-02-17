import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import moviesReducer from "../redux/moviesSlice";
import gptSearchReducer from "../redux/gptSearchSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSearchReducer,
  },
});

export default AppStore;
