import styled from 'styled-components';
import {
  transitionBorderColor,
  transitionColor,
} from '../../styles/utils/variables';

export const StyledFormField = styled.label<{ $isError?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > input,
  & > textarea {
    ${transitionBorderColor}

    background-color: transparent;
    width: 100%;
    border: 1px solid
      ${(props) => (props.$isError ? '#FF7575' : 'rgba(0, 0, 0, 0.4)')};
    border-radius: 8px;
    padding: 16px 16px 16px 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }

  & > input ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: #b4a9ff;
  }

  &:hover > input,
  &:hover > textarea {
    border-color: #b4a9ff;
  }

  & > svg {
    ${transitionColor}
    color: ${(props) => (props.$isError ? '#FF7575' : 'rgba(0, 0, 0, 0.4)')};
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    left: 16px;
  }

  &:hover > svg,
  &:focus-within > svg {
    color: #b4a9ff;
  }
`;

export const StyledFormFieldErrorText = styled.span<{ $isError?: boolean }>`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ff7575;
`;
