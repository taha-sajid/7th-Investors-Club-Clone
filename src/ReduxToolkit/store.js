import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
