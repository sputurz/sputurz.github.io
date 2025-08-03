import { css } from 'styled-components';
import { transitionOpacity } from '../utils/variables';

export const BtnPrimaryStyles = css`
  ${transitionOpacity}
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  background: #67a5eb;
  border-radius: 28px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  user-select: none;

  &:focus-visible,
  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }
`;
