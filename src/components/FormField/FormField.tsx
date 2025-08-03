import { FC, ReactNode } from 'react';
import { StyledFormField, StyledFormFieldErrorText } from './FormField.styles';

interface IProps {
  children: ReactNode;
  isError?: boolean;
  errorMessage?: string;
}

export const FormField: FC<IProps> = ({ children, isError, errorMessage }) => {
  return (
    <StyledFormField $isError={isError}>
      {children}
      {errorMessage && (
        <StyledFormFieldErrorText>{errorMessage}</StyledFormFieldErrorText>
      )}
    </StyledFormField>
  );
};
