import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';
import { AxiosError } from 'axios';

export function useMovieById(movieId: IMovie['id']) {
  return useQuery<IMovie, AxiosError>({
    queryKey: ['movie'],
    queryFn: () => Api.getMovieById(movieId),
    retry: 0,
  });
}
