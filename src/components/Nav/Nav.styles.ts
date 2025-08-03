import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';
import { NavLink } from 'react-router-dom';
import { NavLinkStyles } from '../../styles/global/NavLink';
import { Icon } from '../Icon';

export const StyledNav = styled.nav`
  & > :first-child {
    display: none;
  }

  display: flex;

  ${vp767(css`
    gap: 30px;

    & > :first-child {
      display: flex;
    }
  `)}

  ${vp1023(css`
    gap: 40px;
  `)}
`;

export const StyledNavLink = styled(NavLink)`
  ${NavLinkStyles}

  padding: 0;

  & > svg {
    width: 24px;
    height: 24px;

    ${vp767(
      css`
        display: none;
      `
    )}
  }

  ${vp767(
    css`
      font-size: 18px;
      line-height: 24px;
      padding: 4px 0;
    `
  )}

  ${vp1023(css`
    padding: 8px 0;
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export const StyledNavLinkText = styled.span`
  display: none;
  ${vp767(
    css`
      display: unset;
    `
  )}
`;

export const StyledNavLinkSvg = styled(Icon)``;
