import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Container';
import { ErrorFallback } from '../../components/ErrorFallback';
import { TabNav } from '../../components/TabNav';
import { useMovieTop } from '../../hooks/useMovieTop';
import {
  StyledUserProfile,
  StyledUserProfileTitle,
  StyledUserProfileWrap,
} from './UserProfilePage.styles.styles';
import { ReactNode } from 'react';

export default function UserProfilePage({
  children,
}: {
  children?: ReactNode;
}) {
  const { data, error } = useMovieTop();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledUserProfile>
      <Container>
        <StyledUserProfileWrap>
          <StyledUserProfileTitle>Мой аккаунт</StyledUserProfileTitle>
          <TabNav></TabNav>
          {children || <Outlet />}
        </StyledUserProfileWrap>
      </Container>
    </StyledUserProfile>
  );
}
