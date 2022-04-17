import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  accessToken: string;
  isLogin: boolean;
  user: any;
}
const initialState: InitialState = {
  accessToken: "",
  isLogin: false,
  user: {},
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
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
