import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { VisuallyHidden } from '../../styles/utils/VisuallyHidden';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';
import { Link } from 'react-router-dom';

export const StyledMoviesPage = styled.section`
  margin: 40px 0;

  ${vp767(css`
    margin: 64px 0 160px;
  `)}
`;

export const StyledMoviesPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(css`
    gap: 64px;
  `)}
`;

export const StyledMoviesPageHideTitle = styled.h1`
  ${VisuallyHidden}
`;

export const StyledMoviesPageBackLink = styled(Link)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  display: flex;
  align-items: center;

  ${vp767(css`
    font-size: 48px;
    line-height: 56px;
  `)}

  svg {
    width: 32px;
    height: 32px;

    ${vp767(css`
      width: 40px;
      height: 40px;
    `)}
  }
`;

export const StyledMoviesPageList = styled.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${vp767(css`
    gap: 64px 40px;
    grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  `)}
`;

export const StyledMoviesPageItem = styled.li`
  ${vp767(css`
    max-width: 224px;
  `)}
`;

export const StyledMoviesPageBtn = styled.button`
  ${BtnPrimaryStyles}

  align-self: center;
  width: 100%;
  background-color: #6a5dc2;

  ${vp767(css`
    width: 218px;
    background-color: #67a5eb;
  `)}
`;
