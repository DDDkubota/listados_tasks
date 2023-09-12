// redux/loadingSlice.js
import { createSlice } from '@reduxjs/toolkit';
const controlSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    startLoading: () => {
      return true; 
    },
    finishLoading: () => {
      return false;
    },
  },
});

export const { startLoading, finishLoading } = controlSlice.actions;

export default controlSlice.reducer;