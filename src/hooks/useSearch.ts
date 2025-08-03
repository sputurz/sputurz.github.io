import { useQuery } from '@tanstack/react-query';
import Api from '../api/api';
import { Movies } from '../models';
import { AxiosError } from 'axios';

export function useSearch(searchValue: string) {
  return useQuery<Movies, AxiosError>({
    queryKey: ['search', searchValue] as const,
    queryFn: () => Api.getMovies({ count: 5, title: searchValue }),
    enabled: !!searchValue,
    retry: 0,
  });
}
