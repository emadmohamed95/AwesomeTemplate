import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoggedOut: false,
  isAuthenticated: false,
  skipAuth: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload;
      state.token = payload.token;
      state.isAuthenticated = true;
      state.skipAuth = false;
    },
    unsetCredentials: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoggedOut = true;
      state.skipAuth = false;

    },
    skipAuth: (state, { payload }) => {
        state.skipAuth = true;
      },
    refreshCredentials: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
  },
});

export const { setCredentials, unsetCredentials, refreshCredentials, skipAuth } =
  auth.actions;

export default auth.reducer;