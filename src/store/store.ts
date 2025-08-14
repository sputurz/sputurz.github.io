import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { languageSlice } from './globalSlices/languageSlice';
import { authModalSlice } from '../components/AuthModal/AuthModalSlice';
import { authSlice } from './globalSlices/authSlice';
import { themeSlice } from './globalSlices/themeSlice';

const rootReducer = combineSlices(
  languageSlice,
  authModalSlice,
  authSlice,
  themeSlice
);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

export type AppStore = typeof store;

export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
