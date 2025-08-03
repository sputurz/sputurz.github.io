import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { Movies } from '../models';
import { AxiosError } from 'axios';

export function useFavorites() {
  return useQuery<Movies, AxiosError>({
    queryKey: ['favorites'],
    queryFn: () => Api.getFavorites(),
    retry: 0,
  });
}
