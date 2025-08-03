import { useInfiniteQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { IGetMovies } from '../api/MoviesPageApi';
import { Movies } from '../models';
import { AxiosError } from 'axios';

export function useMovies(params: Omit<IGetMovies, 'page'>) {
  return useInfiniteQuery<Movies, AxiosError>({
    queryKey: ['movies', params],

    queryFn: ({ pageParam = 0 }) =>
      Api.getMovies({ ...params, page: pageParam as number }),

    getNextPageParam: (lastPage, allPages) => {
      const count = params.count ?? 10;

      return lastPage.length < count ? undefined : allPages.length;
    },
    initialPageParam: 0,
    retry: 0,
    gcTime: 0, // в v5 заменяет cacheTime
    staleTime: 0,
  });
}
