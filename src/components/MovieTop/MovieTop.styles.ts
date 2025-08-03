import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledTop = styled.section``;

export const StyledTopWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 40px;

  ${vp767(css`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`;

export const StyledTopTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${vp767(css`
    font-size: 40px;
    line-height: 48px;
  `)}
`;

export const StyledTopList = styled.ul`
  margin: -80px -20px;
  padding: 80px 20px;
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${vp767(css`
    margin: 0;
    padding: 0;
    overflow-x: unset;
    scrollbar-width: unset;
    display: grid;
    grid-template-columns: repeat(auto-fit, 224px);
    gap: 64px 40px;
    justify-content: space-evenly;

    &::-webkit-scrollbar {
      display: unset;
    }
  `)}
`;

export const StyledTopListItem = styled.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;

  ${vp767(css``)}
`;
