import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledFavoritesTab = styled.div`
  color: white;

  ${vp767(css``)}
`;

export const StyledFavoritesTabist = styled.ul`
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

export const StyledFavoritesTabListItem = styled.li`
  flex-shrink: 0;
  width: 224px;
  height: 336px;

  ${vp767(css``)}
`;
