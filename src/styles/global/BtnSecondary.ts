import { css } from 'styled-components';
import { BtnPrimaryStyles } from './BtnPrimary';
import {
  transitionBgrColor,
  transitionBorderColor,
  transitionColor,
} from '../utils/variables';

export const BtnSecondaryStyles = css`
  ${BtnPrimaryStyles}
  ${transitionColor}
  ${transitionBorderColor}
  ${transitionBgrColor}

  background:   #393b3c;
  border-color: rgba(0, 0, 0, 0.4);

  &:focus-visible,
  &:hover {
    color: #000000;
    background-color: #ffffff;
    border-color: #ffffff;
    opacity: unset;
  }

  &:disabled {
    background: #747474;
  }
`;
