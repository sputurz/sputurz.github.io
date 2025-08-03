import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { Movies } from '../models';
import { AxiosError } from 'axios';

export function useMovieTop() {
  return useQuery<Movies, AxiosError>({
    queryKey: ['top10'],
    queryFn: () => Api.getMovieTop10(),
    retry: 0,
  });
}
