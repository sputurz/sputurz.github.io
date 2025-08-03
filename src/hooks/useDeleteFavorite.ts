import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFavorite } from '../api/Favorites';
import { IMovie } from '../models';

export function useDeleteFavorite(movieId: IMovie['id']) {
  const queryClient = useQueryClient();

  const deleteFavoriteMutation = useMutation<void, Error, number>({
    mutationFn: deleteFavorite,
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['me'] });
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const deleteFavoriteHandler = () => {
    deleteFavoriteMutation.mutate(movieId);
  };

  const isPending = deleteFavoriteMutation.isPending;

  return { deleteFavoriteHandler, isPending };
}
