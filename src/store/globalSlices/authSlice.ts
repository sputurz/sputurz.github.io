import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../createAppSlice';
import { User } from '../../models';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
};

export const authSlice = createAppSlice({
  name: 'auth',

  initialState: initialState,

  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },

  selectors: {
    selectAuth: (state) => state,
    selectUser: (state) => state.user,
    selectIsLoading: (state) => state.isLoading,
    selectIsAuthenticated: (state) => state.isAuthenticated,
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export const {
  selectAuth,
  selectUser,
  selectIsLoading,
  selectIsAuthenticated,
} = authSlice.selectors;
