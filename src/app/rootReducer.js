import { combineReducers } from '@reduxjs/toolkit';
import SignIn from '../features/SignIn/slice/AuthSlice';
import { cachedAPI } from './cachedAPI';

const rootReducer = combineReducers({
  SignIn,
  [cachedAPI.reducerPath]: cachedAPI.reducer,
});

export default rootReducer;
