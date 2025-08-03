import { LoginUser, RegisterUser, User } from '../models';
import { makeRequest } from './config';

export const loginUser = (payload: LoginUser): Promise<void> => {
  return makeRequest('/auth/login', {
    method: 'POST',
    data: payload,
  });
};

export const registerUser = (payload: RegisterUser): Promise<void> => {
  return makeRequest('/user', {
    method: 'POST',
    data: payload,
  });
};

export const logoutUser = (): Promise<void> => makeRequest('/auth/logout');

export const getProfile = (): Promise<User> => makeRequest('/profile');
