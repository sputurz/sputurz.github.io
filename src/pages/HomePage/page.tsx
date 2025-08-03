import { ErrorFallback } from '../../components/ErrorFallback';
import { MoviePromo } from '../../components/MoviePromo';
import { MovieTop } from '../../components/MovieTop/MovieTop';
import { useMovieRandom } from '../../hooks/useMovieRandom';
import { StyledHomePageTitle } from './HomePage.styles';

export default function HomePage() {
  const { data, error, isLoading, isFetching, refetch } = useMovieRandom();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <>
      <StyledHomePageTitle>Главная страница - Маруся</StyledHomePageTitle>
      <MoviePromo
        isLoading={isLoading}
        movie={data}
        refetch={refetch}
        isFetching={isFetching}
      />
      <MovieTop></MovieTop>
    </>
  );
}
