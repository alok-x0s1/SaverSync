import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        console.log('Login reducer called with payload:', action.payload);
      state.status = true;
      state.userData = action.payload;
      console.log("state : ", state.userData);
    },

    logout: (state, action) => {
        console.log('Logout reducer called');
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions

export default authSlice.reducer