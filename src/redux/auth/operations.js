import axios from "../helpers/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const checkResponse = await axios.get(
        `/users?email=${credentials.email}`
      );

      if (checkResponse.data.length > 0) {
        return rejectWithValue("This email is already in use.");
      }

      const res = await axios.post(`/users`, credentials);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/users?email=${credentials.email}`);
      const user = res.data[0];

      if (
        !user ||
        user.password !== credentials.password ||
        user.email !== credentials.email
      ) {
        return rejectWithValue("Incorrect email or password.");
      }

      setAuthHeader(user.id);
      return { user, token: user.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
