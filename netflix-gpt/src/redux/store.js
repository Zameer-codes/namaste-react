import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import moviesReducer from "../redux/moviesSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default AppStore;
