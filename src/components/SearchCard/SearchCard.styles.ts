import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';
import { transitionBorderColor } from '../../styles/utils/variables';

export const StyledSearchCard = styled(Link)`
  ${transitionBorderColor}
  width: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  padding: 0;
  border-radius: 6px;
  gap: 16px;

  ${vp767(css`
    width: unset;
    display: grid;
    grid-template-columns: 40px 1fr;
    padding: 20px 8px;
  `)}

  &:hover,
  &:focus-visible {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledSearchCardImg = styled.img`
  width: 158px;
  height: 206px;

  ${vp767(css`
    width: 100%;
    height: unset;
    aspect-ratio: 40 / 52;
  `)}
`;

export const StyledSearchCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${vp767(css``)}
`;

export const StyledSearchCardInner = styled.div`
  display: flex;
  gap: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  flex-wrap: wrap;

  ${vp767(css``)}
`;

export const StyledSearchCardTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  ${vp767(css``)}
`;

export const StyledSearchCardYear = styled.span`
  ${vp767(css``)}
`;

export const StyledSearchCardGenres = styled.span`
  ${vp767(css``)}
`;

export const StyledSearchCardRuntime = styled.span`
  ${vp767(css``)}
`;
