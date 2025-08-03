import { Container } from '../../components/Container/Container';
import { GenreCard } from '../../components/GenreCard';
import {
  StyledGenresPage,
  StyledGenresPageList,
  StyledGenresPageListItem,
  StyledGenresPageTitle,
  StyledGenresPageWrap,
} from './GenresPage.styles';
import { genres, getTransletedValue } from '../../utils/dictionarty';
import { ErrorFallback } from '../../components/ErrorFallback';
import { useMovieGenres } from '../../hooks/useMovieGenres';
import { useAppSelector } from '../../store/hooks';
import { selectLanguage } from '../../store/globalSlices/languageSlice';

export default function GenresPage() {
  const currentLang = useAppSelector(selectLanguage);

  const { data, error } = useMovieGenres();

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;
  if (!data) return null;

  return (
    <StyledGenresPage>
      <Container>
        <StyledGenresPageWrap>
          <StyledGenresPageTitle>Жанры фильмов</StyledGenresPageTitle>
          <StyledGenresPageList>
            {data.map(
              (genre) =>
                genre && (
                  <StyledGenresPageListItem key={genre}>
                    <GenreCard
                      genre={genre}
                      genreTranslated={
                        getTransletedValue(genres, currentLang, genre) || genre
                      }
                    />
                  </StyledGenresPageListItem>
                )
            )}
          </StyledGenresPageList>
        </StyledGenresPageWrap>
      </Container>
    </StyledGenresPage>
  );
}
