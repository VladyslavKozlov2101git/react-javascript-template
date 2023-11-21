import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { cachedAPI } from './cachedAPI';

const authMiddleware = () => (next) => (action) => {
  return next(action);
};

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authMiddleware, cachedAPI.middleware),
  });
};

export const store = setupStore();

export const AppStore = setupStore().constructor;
export const AppDispatch = AppStore.prototype.dispatch;
