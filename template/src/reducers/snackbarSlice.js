import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type:null,
    message:null,
  };

export const snackbar = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, { payload }) => {
      state.type = payload.type;
      state.message = payload.message;
    },
    hideSnackbar: state => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { showSnackbar, hideSnackbar } =
snackbar.actions;

export default snackbar.reducer;