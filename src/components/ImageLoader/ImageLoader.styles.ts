import styled from 'styled-components';

export const StyledImageLoader = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const StyledImage = styled.img<{ $isBusy: boolean }>`
  opacity: ${({ $isBusy }) => ($isBusy ? 0.1 : 1)};
`;
