import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledGenresPage = styled.section`
  margin: 40px 0;

  ${vp767(css`
    margin: 64px 0 160px;
  `)}
`;

export const StyledGenresPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(css`
    gap: 64px;
  `)}
`;

export const StyledGenresPageTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${vp767(css`
    font-size: 48px;
    line-height: 56px;
  `)}
`;

export const StyledGenresPageList = styled.ul`
  height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${vp767(css`
    gap: 64px 40px;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  `)}
`;

export const StyledGenresPageListItem = styled.li``;
