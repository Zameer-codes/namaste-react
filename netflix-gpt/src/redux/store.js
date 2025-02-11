import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default AppStore;
