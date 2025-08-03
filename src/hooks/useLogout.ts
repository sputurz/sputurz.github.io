import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '../api/api';
import { clearUser } from '../store/globalSlices/authSlice';

export function useLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: () => Api.logoutUser(),
    onSuccess: () => {
      dispatch(clearUser());
      queryClient.removeQueries({ queryKey: ['me'] });
      navigate('/', { replace: true });
    },
    onError: () => {
      dispatch(clearUser());
      queryClient.removeQueries({ queryKey: ['me'] });
      navigate('/', { replace: true });
    },
  });

  // const handleLogout = useCallback(() => {
  //   logoutMutation.mutate();
  // }, [logoutMutation]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const isPending = logoutMutation.isPending;

  return { handleLogout, isPending };
}
