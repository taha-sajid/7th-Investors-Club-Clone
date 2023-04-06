import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
});

console.log(authSlice);
export default authSlice.reducer;
