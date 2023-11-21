import { createSlice } from '@reduxjs/toolkit';
import { getListOfelements } from './AuthActions';

const initialState = {
  isLoading: false,
  error: '',
};

const signInSlice = createSlice({
  name: 'SIGN_IN',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //GET LIST OF ELEMENTS
      .addCase(getListOfelements.fulfilled, (state) => {
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getListOfelements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListOfelements.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default signInSlice.reducer;
