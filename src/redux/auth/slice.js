import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

const handleAuthFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};

const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled);
  },
});

export const authReducer = authSlice.reducer;
