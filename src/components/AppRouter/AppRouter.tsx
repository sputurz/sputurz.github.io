import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { AuthModal } from '../AuthModal';
import { useAuthInit } from '../../hooks/useAuthInit';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/page'));
const GenresPage = lazy(() => import('../../pages/GenresPage/page'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/page'));
const MoviePage = lazy(() => import('../../pages/MoviePage/page'));
const UserProfilePage = lazy(() => import('../../pages/UserProfilePage/page'));
const SettingTab = lazy(() => import('../../components/SettingTab/SettingTab'));
const FavoritesTab = lazy(
  () => import('../../components/FavoritesTab/FavoritesTab')
);

// Создаем кастомный компонент для MoviePage с ключом
const MoviePageWithKey = () => {
  const location = useLocation();
  return <MoviePage key={location.pathname} />;
};

const routerConfig = [
  { path: '/', component: HomePage },
  { path: '/genres', component: GenresPage },
  { path: '/movies', component: MoviesPage },
  {
    path: '/movie/:movieId',
    component: MoviePageWithKey,
  },
  {
    path: '/profile/*',
    component: () => (
      <UserProfilePage>
        <Routes>
          <Route index element={<Navigate to="favorites" replace />} />
          <Route path="favorites" element={<FavoritesTab />} />
          <Route path="settings" element={<SettingTab />} />
        </Routes>
      </UserProfilePage>
    ),
  },
] as const;

export const AppRouter = () => {
  useAuthInit();

  return (
    <ErrorBoundary
      fallback={
        <main>
          <ErrorFallback>
            Что-то пошло не так. Пожалуйста, перезагрузите страницу.
          </ErrorFallback>
        </main>
      }
    >
      <Suspense fallback={<Loader></Loader>}>
        <Header></Header>
        <AuthModal></AuthModal>
        <main>
          <Routes>
            {routerConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </main>
        <Footer></Footer>
      </Suspense>
    </ErrorBoundary>
  );
};
