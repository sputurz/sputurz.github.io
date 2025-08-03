import { useSearchParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { useMovies } from '../../hooks/useMovies';
import {
  StyledMoviesPage,
  StyledMoviesPageList,
  StyledMoviesPageItem,
  StyledMoviesPageBackLink,
  StyledMoviesPageWrap,
  StyledMoviesPageHideTitle,
  StyledMoviesPageBtn,
} from './MoviesPage.styles';
import { genres, getTransletedValue } from '../../utils/dictionarty';
import { toUpperFirstChar } from '../../utils/toUpperFirstChar';
import { ErrorFallback } from '../../components/ErrorFallback';
import { Icon } from '../../components/Icon';
import { InfiniteTrigger } from '../../components/InfiniteTrigger';
import { MovieCard } from '../../components/MovieCard';

const currentLang = 'russian';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();

  const searchCount = searchParams.get('count')
    ? Number(searchParams.get('count'))
    : 10;

  const searchTitle = searchParams.get('title') || '';
  const searchGenre = searchParams.get('genre') || '';

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovies({
      count: searchCount,
      title: searchTitle,
      genre: searchGenre,
    });

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledMoviesPage>
      <Container>
        <StyledMoviesPageHideTitle>
          Поиск фильмов по заданными фильтрам
        </StyledMoviesPageHideTitle>
        <StyledMoviesPageWrap>
          {searchGenre ? (
            <StyledMoviesPageBackLink to={'/genres'}>
              <Icon name="LeftIcon"></Icon>
              {toUpperFirstChar(
                getTransletedValue(genres, currentLang, searchGenre) ||
                  searchGenre
              )}
            </StyledMoviesPageBackLink>
          ) : null}
          <StyledMoviesPageList>
            {data.pages.flat().map((movie) => (
              <StyledMoviesPageItem key={movie.id}>
                <MovieCard movie={movie}></MovieCard>
              </StyledMoviesPageItem>
            ))}
          </StyledMoviesPageList>
          {hasNextPage ? (
            <StyledMoviesPageBtn
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              Показать ещё
            </StyledMoviesPageBtn>
          ) : null}
          {hasNextPage && (
            <InfiniteTrigger
              disabled={isFetchingNextPage}
              onIntersect={() => fetchNextPage()}
            />
          )}
        </StyledMoviesPageWrap>
      </Container>
    </StyledMoviesPage>
  );
}
