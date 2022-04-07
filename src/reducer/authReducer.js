import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    isLogin: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isLogin = true;
      state.user = action.payload.user;
    },
  },
});

export const { login } = authReducer.actions;

export default authReducer.reducer;
