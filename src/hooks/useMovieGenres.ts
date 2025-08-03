import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';
import { AxiosError } from 'axios';

export function useMovieGenres() {
  return useQuery<IMovie['genres'], AxiosError>({
    queryKey: ['genres'],
    queryFn: () => Api.getMovieGenres(),
    retry: 0,
  });
}
