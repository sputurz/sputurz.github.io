import { useMovieTop } from '../../hooks/useMovieTop';
import { Container } from '../Container';
import { ErrorFallback } from '../ErrorFallback';
import { MovieCard } from '../MovieCard';
import {
  StyledTop,
  StyledTopList,
  StyledTopListItem,
  StyledTopTitle,
  StyledTopWrap,
} from './MovieTop.styles';

export function MovieTop() {
  const { data, error } = useMovieTop();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledTop>
      <Container>
        <StyledTopWrap>
          <StyledTopTitle>Топ 10 фильмов</StyledTopTitle>
          <StyledTopList>
            {data
              ? [...data]
                  .sort((a, b) => b.tmdbRating - a.tmdbRating)
                  .map((movie, index) => (
                    <StyledTopListItem key={movie.id}>
                      <MovieCard
                        movie={movie}
                        indexRating={index + 1}
                        isRatingShown
                      />
                    </StyledTopListItem>
                  ))
              : null}
          </StyledTopList>
        </StyledTopWrap>
      </Container>
    </StyledTop>
  );
}
