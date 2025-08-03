import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';
import { NavLink } from 'react-router-dom';
import { NavLinkStyles } from '../../styles/global/NavLink';
import { transitionOpacity } from '../../styles/utils/variables';

export const StyledHeader = styled.header`
  padding: 16px 0;

  ${vp767(css`
    padding: 24px 0;
  `)}
`;

export const StyledHeaderWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 20px;
  ${vp767(css`
    grid-template-columns: auto 1fr auto;
    gap: 40px;
  `)}

  ${vp1023(css`
    gap: 80px;
  `)}
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  ${vp767(css`
    gap: 30px;
  `)}

  ${vp1023(css`
    gap: 40px;
  `)}
`;

export const StyledHeaderNavLink = styled(NavLink)`
  ${NavLinkStyles}

  svg {
    width: 24px;
    height: 24px;
  }
  ${vp767(css`
    padding: 4px 0;

    svg {
      display: none;
    }
  `)}

  ${vp1023(css`
    padding: 8px 0;
  `)}
`;

export const StyledHeaderNavLinkText = styled.span`
  display: none;

  ${vp767(css`
    font-size: 18px;
    line-height: 24px;
    display: block;
  `)}

  ${vp1023(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export const StyledHeaderBtnModal = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  color: #ffffff;
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
  }

  ${vp767(css`
    font-size: 18px;
    line-height: 24px;
    padding: 4px 0;

    svg {
      display: none;
    }
  `)}

  ${vp1023(css`
    padding: 8px 0;
    font-size: 24px;
    line-height: 32px;
  `)}

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledHeaderBtnModalText = styled.span`
  display: none;

  ${vp767(css`
    display: flex;
  `)}
`;
