import { useState } from 'react';
import {
  StyledCard,
  StyledCardImg,
  StyledCardImgContainer,
  StyledCardName,
} from './GenreCard.styles';
import { toUpperFirstChar } from '../../utils/toUpperFirstChar';

interface IProps {
  genre: string;
  genreTranslated: string;
}

export function GenreCard({ genre, genreTranslated }: IProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <StyledCard to={`/movies?genre=${genre}`}>
      <StyledCardImgContainer>
        {hasError ? (
          <StyledCardImg src={`/images/genre/error.jpg`} alt={genre} />
        ) : (
          <StyledCardImg
            src={`/images/genre/${genre}.jpg`}
            alt={genre}
            onError={() => setHasError(true)}
          />
        )}
      </StyledCardImgContainer>
      <StyledCardName>{toUpperFirstChar(genreTranslated)}</StyledCardName>
    </StyledCard>
  );
}
