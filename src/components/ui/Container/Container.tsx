import type { FC, ReactNode } from 'react';

type IProps = {
  children?: ReactNode;
};

export const Container: FC<IProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
