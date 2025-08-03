import { Movies } from '../models/Movie';
import { makeRequest } from './config';

export interface IGetMovies {
  count?: number;
  page?: number;
  genre?: string;
  title?: string;
}

export const getMovies = ({
  count,
  page,
  title,
  genre,
}: IGetMovies = {}): Promise<Movies> => {
  const params = new URLSearchParams();

  if (count) params.append('count', count.toString());
  if (page) params.append('page', page.toString());
  if (title) params.append('title', title);
  if (genre) params.append('genre', genre);

  const url = `/movie${params.toString() ? `?${params}` : ''}`;
  return makeRequest<Movies>(url);
};
