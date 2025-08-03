import { openAuthModal } from '../components/AuthModal/AuthModalSlice';
import { IMovie } from '../models';
import {
  selectIsAuthenticated,
  selectUser,
} from '../store/globalSlices/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useAddFavorite } from './useAddFavorite';
import { useDeleteFavorite } from './useDeleteFavorite';

export function useLike(movieId: IMovie['id']) {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);

  const { deleteFavoriteHandler, isPending: isDeletePending } =
    useDeleteFavorite(movieId);
  const { addFavoriteHandler, isPending: isAddPending } =
    useAddFavorite(movieId);

  const onLike = () => {
    if (!isAuthenticated) {
      dispatch(openAuthModal());
      return;
    }

    if (user?.favorites.includes(movieId.toString())) {
      deleteFavoriteHandler();
    } else {
      addFavoriteHandler();
    }
  };

  const isPending = isDeletePending || isAddPending;

  return { onLike, isPending };
}
