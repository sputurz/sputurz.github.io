import { FC, useState } from 'react';
import { IMovie } from '../../models';
import {
  StyledMoviePromo,
  StyledMoviePromoLinkAbout,
  StyledMoviePromoBtnLike,
  StyledMoviePromoBtnUpd,
  StyledMoviePromoBtnVideo,
  StyledMoviePromoBtnWrap,
  StyledMoviePromoPlot,
  StyledMoviePromoTagText,
  StyledMoviePromoTextWrap,
  StyledMoviePromoTitle,
  StyledMoviePromoWrap,
  StyledMoviePromoImgContainer,
  StyledMoviePromoInner,
} from './MoviePromo.styles';
import { MovieRating } from '../MovieRating';
import { Icon } from '../Icon';
import { Container } from '../Container';
import { VideoPlayer } from '../VideoPlayer';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/globalSlices/authSlice';
import { useLike } from '../../hooks/useLike';
import { MovieTagList } from '../MovieTagList';

type Props = {
  movie: IMovie;
  isFetching: boolean;
  isLoading: boolean;
  isAboutMovie?: boolean;
  refetch?: () => void;
};

export const MoviePromo: FC<Props> = ({
  movie,
  isFetching,
  isLoading,
  isAboutMovie = false,
  refetch,
}) => {
  const user = useAppSelector(selectUser);
  const isLiked = user?.favorites.includes(movie.id.toString()) || false;

  const { onLike } = useLike(movie.id);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const isBusy = isFetching || isLoading || !imageLoaded;

  const onUpdate = () => {
    if (refetch) {
      refetch();
    }
  };

  const onVideoBtn = () => {
    setShowPlayer(true);
    document.body.style.overflow = 'hidden';
  };

  const onBackdrop = () => {
    setShowPlayer(false);
    document.body.style.overflow = '';
  };

  const onClose = () => {
    setShowPlayer(false);
    document.body.style.overflow = '';
  };

  return (
    <StyledMoviePromo>
      <Container>
        <StyledMoviePromoInner>
          <StyledMoviePromoImgContainer
            src={movie.backdropUrl || '/images/moviePromo/error.jpg'}
            alt={movie.title}
            isFetching={isFetching}
            isLoading={isLoading}
            onImageLoadedChange={setImageLoaded}
          ></StyledMoviePromoImgContainer>

          <StyledMoviePromoWrap $isAboutMovie={isAboutMovie}>
            <StyledMoviePromoTextWrap>
              <StyledMoviePromoTagText>
                {movie.tmdbRating ? (
                  <MovieRating rating={movie.tmdbRating}></MovieRating>
                ) : null}

                <MovieTagList movie={movie}></MovieTagList>
              </StyledMoviePromoTagText>
              <StyledMoviePromoTitle $isAboutMovie={isAboutMovie}>
                {movie.title}
              </StyledMoviePromoTitle>
              <StyledMoviePromoPlot $isAboutMovie={isAboutMovie}>
                {movie.plot}
              </StyledMoviePromoPlot>
            </StyledMoviePromoTextWrap>
            <StyledMoviePromoBtnWrap $isAboutMovie={isAboutMovie}>
              <StyledMoviePromoBtnVideo disabled={isBusy} onClick={onVideoBtn}>
                Трейлер
              </StyledMoviePromoBtnVideo>
              {showPlayer && (
                <VideoPlayer
                  trailerYouTubeId={movie.trailerYoutubeId}
                  trailerUrl={movie.trailerUrl}
                  onBackdrop={onBackdrop}
                  onClose={onClose}
                />
              )}
              {isAboutMovie ? null : (
                <StyledMoviePromoLinkAbout
                  $iSdisabled={isBusy}
                  to={`/movie/${movie.id}`}
                >
                  о фильме
                </StyledMoviePromoLinkAbout>
              )}
              <StyledMoviePromoBtnLike
                $isLiked={isLiked}
                disabled={isBusy}
                onClick={onLike}
              >
                <Icon name="LikeIcon"></Icon>
              </StyledMoviePromoBtnLike>
              {isAboutMovie ? null : (
                <StyledMoviePromoBtnUpd onClick={onUpdate} disabled={isBusy}>
                  <Icon name="UpdateIcon"></Icon>
                </StyledMoviePromoBtnUpd>
              )}
            </StyledMoviePromoBtnWrap>
          </StyledMoviePromoWrap>
        </StyledMoviePromoInner>
      </Container>
    </StyledMoviePromo>
  );
};
