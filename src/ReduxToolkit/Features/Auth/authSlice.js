import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { checkLoggedIn } = authSlice.actions;
console.log(authSlice.actions);
export default authSlice.reducer;
