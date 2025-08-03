import { Container } from '../Container';
import { StyledErrorFallback } from './ErrorFallback.styles';
import type { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const ErrorFallback: FC<Props> = ({ children }) => {
  return (
    <Container>
      <StyledErrorFallback>{children}</StyledErrorFallback>
    </Container>
  );
};
