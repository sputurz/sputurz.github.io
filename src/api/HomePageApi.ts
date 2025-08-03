import { IMovie, Movies } from '../models/Movie';
import { makeRequest } from './config';

export const getMovieTop10 = (): Promise<Movies> => makeRequest('/movie/top10');

export const getMovieRandom = (): Promise<IMovie> =>
  makeRequest('/movie/random');
