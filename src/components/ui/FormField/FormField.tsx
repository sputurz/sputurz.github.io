import type { FC, ReactNode } from 'react';
import styles from './FormField.module.scss';

interface IProps {
  children: ReactNode;
  isError?: boolean;
  errorMessage?: string;
  htmlFor?: string;
}

export const FormField: FC<IProps> = ({
  children,
  isError,
  errorMessage,
  htmlFor,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles['form-field']}>
        {children}
        {errorMessage && (
          <span className={styles['form-field__error']}>{errorMessage}</span>
        )}
      </label>
      {/* <S.Label $isError={isError}>
        {children}
        {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
      </S.Label> */}
    </>
  );
};
