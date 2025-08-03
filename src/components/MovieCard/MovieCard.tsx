import {
  StyledMovieCardLink,
  StyledMovieCardBtnDelete,
  StyledMovieCardImg,
  StyledMovieCardRating,
  StyledMovieCard,
} from './MovieCard.styles';
import { IMovie } from '../../models';
import { useDeleteFavorite } from '../../hooks/useDeleteFavorite';
import { Icon } from '../Icon';

interface IProps {
  movie: IMovie;
  indexRating?: number;
  isRatingShown?: boolean;
  isUserProfile?: boolean;
}

export function MovieCard({
  movie,
  indexRating,
  isRatingShown = false,
  isUserProfile = false,
}: IProps) {
  const { deleteFavoriteHandler } = useDeleteFavorite(movie.id);

  return (
    <StyledMovieCard>
      <StyledMovieCardLink to={`/movie/${movie.id}`}>
        <StyledMovieCardImg
          src={
            movie.backdropUrl ? movie.posterUrl : '/images/movieCard/error.jpg'
          }
          alt={movie.title}
        />
      </StyledMovieCardLink>
      {isRatingShown ? (
        <StyledMovieCardRating>{indexRating}</StyledMovieCardRating>
      ) : null}
      {isUserProfile ? (
        <StyledMovieCardBtnDelete onClick={deleteFavoriteHandler}>
          <Icon name="CloseIcon"></Icon>
        </StyledMovieCardBtnDelete>
      ) : null}
    </StyledMovieCard>
  );
}
