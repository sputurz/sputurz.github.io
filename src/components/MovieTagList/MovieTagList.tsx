import { FC } from 'react';
import { IMovie } from '../../models';
import {
  StyledMovieTagList,
  StyledMovieTagListGenres,
  StyledMovieTagListRuntime,
  StyledMovieTagListYear,
} from './MovieTagList.styles';
import { convertMinsToHoursMins } from '../../utils/convertMinsToHoursMins';

type Props = {
  movie: IMovie;
};

export const MovieTagList: FC<Props> = ({ movie }) => {
  return (
    <StyledMovieTagList>
      <StyledMovieTagListYear>{movie.releaseYear}</StyledMovieTagListYear>
      <StyledMovieTagListGenres>
        {movie.genres?.join(', ') || ''}
      </StyledMovieTagListGenres>
      <StyledMovieTagListRuntime>
        {convertMinsToHoursMins(movie.runtime)}
      </StyledMovieTagListRuntime>
    </StyledMovieTagList>
  );
};
