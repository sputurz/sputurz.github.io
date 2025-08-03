import type { FC, ReactNode } from 'react';
import { StyleContainer } from './Container.styles';

type Props = {
  children?: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>;
};
