import { getProfile, loginUser, logoutUser } from './AuthApi';
import { addFavorite, deleteFavorite, getFavorites } from './Favorites';
import { getMovieGenres } from './GenresPageApi';
import { getMovieRandom, getMovieTop10 } from './HomePageApi';
import { getMovieById } from './MoviePageApi';
import { getMovies } from './MoviesPageApi';

const Api = {
  getMovieGenres,
  getMovieTop10,
  getMovieRandom,
  getMovies,
  getMovieById,
  loginUser,
  logoutUser,
  getProfile,
  addFavorite,
  deleteFavorite,
  getFavorites,
};

export default Api;
