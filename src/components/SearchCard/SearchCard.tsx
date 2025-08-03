import { IMovie } from '../../models';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';
import { MovieRating } from '../MovieRating';
import {
  StyledSearchCard,
  StyledSearchCardGenres,
  StyledSearchCardImg,
  StyledSearchCardInner,
  StyledSearchCardRuntime,
  StyledSearchCardTitle,
  StyledSearchCardWrap,
  StyledSearchCardYear,
} from './SearchCard.styles';

interface IProps {
  movie: IMovie;
  onCardClick?: () => void;
}

export function SearchCard({ movie, onCardClick }: IProps) {
  return (
    <StyledSearchCard to={`/movie/${movie.id}`} onClick={onCardClick}>
      <StyledSearchCardImg
        src={
          movie.backdropUrl ? movie.posterUrl : '/images/movieCard/error.jpg'
        }
        alt={movie.title}
      ></StyledSearchCardImg>
      <StyledSearchCardWrap>
        <StyledSearchCardInner>
          {movie.tmdbRating ? (
            <MovieRating rating={movie.tmdbRating} isSearch></MovieRating>
          ) : null}
          <StyledSearchCardYear>{movie.releaseYear}</StyledSearchCardYear>
          <StyledSearchCardGenres>
            {movie.genres?.join(', ') || ''}
          </StyledSearchCardGenres>
          <StyledSearchCardRuntime>
            {convertMinsToHoursMins(movie.runtime)}
          </StyledSearchCardRuntime>
        </StyledSearchCardInner>
        <StyledSearchCardTitle>{movie.title}</StyledSearchCardTitle>
      </StyledSearchCardWrap>
    </StyledSearchCard>
  );
}
