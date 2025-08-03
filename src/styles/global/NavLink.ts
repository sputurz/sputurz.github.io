import { css } from 'styled-components';
import { vp767 } from '../utils/mixins';
import { transitionOpacity } from '../utils/variables';

export const NavLinkStyles = css`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  z-index: 15;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    color: #b4a9ff;
  }

  ${vp767(css`
    padding: 8px 0;
    font-size: 24px;
    line-height: 32px;
    border-bottom: 1px solid transparent;
    opacity: 1;

    &.active {
      color: #ffffff;
      border-bottom: 1px solid rgba(151, 71, 255, 1);
    }
  `)}
`;
