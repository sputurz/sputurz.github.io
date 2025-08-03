import styled from 'styled-components';

export const StyledMovieRating = styled.div<{
  $color?: string;
  $isSearch?: boolean;
}>`
  width: ${(props) => (props.$isSearch ? '47px' : '70px')};
  padding: ${(props) => (props.$isSearch ? '2px 8px' : '4px 12px')};
  background-color: red;
  border-radius: 16px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.$color};

  > svg {
    color: #ffffff;
    height: ${(props) => (props.$isSearch ? '10px' : '16px')};
    width: ${(props) => (props.$isSearch ? '10px' : '16px')};
  }
`;

export const StyledMovieRatingText = styled.span<{
  $isSearch?: boolean;
}>`
  font-weight: 700;
  font-size: ${(props) => (props.$isSearch ? '12px' : '18px')};
  line-height: ${(props) => (props.$isSearch ? '16px' : '24px')};
  color: #ffffff;
`;
