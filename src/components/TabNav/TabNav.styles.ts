import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { NavLinkStyles } from '../../styles/global/NavLink';
import { NavLink } from 'react-router-dom';

export const StyledTabNav = styled.nav`
  display: flex;
  gap: 24px;

  ${vp767(css`
    gap: 64px;
  `)}
`;

export const StyledTabNavLink = styled(NavLink)`
  ${NavLinkStyles}

  font-size: 24px;
  line-height: 32px;
  display: flex;
  gap: 4px;

  &.active {
    color: #ffffff;
    border-bottom: 1px solid rgba(151, 71, 255, 1);
  }

  & svg {
    width: 24px;
    height: 24px;

    ${vp767(css``)}
  }

  &:first-child svg {
    color: transparent;
    stroke: #ffffff;
    stroke-width: 1.5;
  }

  ${vp767(
    css`
      gap: 8px;
    `
  )}
`;

export const StyledTabNavLinkText = styled.span`
  ${vp767(css``)}
`;
