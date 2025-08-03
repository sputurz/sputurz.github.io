import { useFavorites } from '../../hooks/useFavorites';
import { ErrorFallback } from '../ErrorFallback';
import { MovieCard } from '../MovieCard';
import {
  StyledFavoritesTab,
  StyledFavoritesTabist,
  StyledFavoritesTabListItem,
} from './FavoritesTab.styles';

export default function FavoritesTab() {
  const { data, error } = useFavorites();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledFavoritesTab>
      <StyledFavoritesTabist>
        {data.map((movie) => (
          <StyledFavoritesTabListItem key={movie.id}>
            <MovieCard movie={movie} isUserProfile />
          </StyledFavoritesTabListItem>
        ))}
      </StyledFavoritesTabist>
    </StyledFavoritesTab>
  );
}
