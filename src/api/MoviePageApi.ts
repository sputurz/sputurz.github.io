import { IMovie } from '../models/Movie';
import { makeRequest } from './config';

export const getMovieById = (movieId: IMovie['id']): Promise<IMovie> =>
  makeRequest(`/movie/${movieId}`);
