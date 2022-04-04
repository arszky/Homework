import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload;
      state.isLogin = true;
    },
  },
});

export const { login } = authReducer.actions;

export default authReducer.reducer;
