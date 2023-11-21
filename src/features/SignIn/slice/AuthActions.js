import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getListOfelements = createAsyncThunk('GET/USERS', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_BASE_API_URL}/elements/`);
    return response.data;
  } catch (error) {
    const axiosError = error;
    if (axiosError.response) {
      return thunkAPI.rejectWithValue(axiosError.response.data);
    } else {
      return thunkAPI.rejectWithValue('The request has failed');
    }
  }
});
