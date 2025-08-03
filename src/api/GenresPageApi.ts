import { IMovie } from '../models/Movie';
import { makeRequest } from './config';

export const getMovieGenres = (): Promise<IMovie['genres']> =>
  makeRequest('/movie/genres');
