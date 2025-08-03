import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavorite } from '../api/Favorites';
import { IMovie } from '../models';

export function useAddFavorite(movieId: IMovie['id']) {
  const queryClient = useQueryClient();

  const addFavoriteMutation = useMutation<void, Error, string>({
    mutationFn: (id) => addFavorite(id),
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['me'] });
    },
  });

  const addFavoriteHandler = () => {
    addFavoriteMutation.mutate(movieId.toString());
  };

  const isPending = addFavoriteMutation.isPending;

  return { addFavoriteHandler, isPending };
}
