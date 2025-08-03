import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IMovie } from '../models';
import { AxiosError } from 'axios';

export function useMovieRandom() {
  return useQuery<IMovie, AxiosError>({
    queryKey: ['random'],
    queryFn: () => Api.getMovieRandom(),
    retry: 0,
  });
}
