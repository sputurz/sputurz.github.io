import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import {
  clearUser,
  setLoading,
  setUser,
} from '../store/globalSlices/authSlice';
import Api from '../api/api';
import { AxiosError } from 'axios';
import { User } from '../models';

export const useAuthInit = () => {
  const dispatch = useDispatch();

  const query = useQuery<User, AxiosError>({
    queryKey: ['me'],
    queryFn: Api.getProfile,
    retry: false,
    staleTime: 0,
    // staleTime: 5 * 60 * 1000,
  });

  const { data, isError, isFetching } = query;

  useEffect(() => {
    dispatch(setLoading(isFetching));

    if (data) dispatch(setUser(data));
    if (isError) dispatch(clearUser());
  }, [data, isError, isFetching, dispatch]);

  return query;
};
