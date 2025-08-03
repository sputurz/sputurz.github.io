import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledMovieInfo = styled.section``;

export const StyledMovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 32px;
  gap: 40px;

  ${vp767(css`
    padding: 40px 0 120px;
    gap: 64px;
  `)}
`;

export const StyledMovieInfoTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${vp767(css`
    font-size: 40px;
    line-height: 48px;
  `)}
`;

export const StyledMovieInfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${vp767(
    css`
      gap: 24px;
    `
  )}
`;

export const StyledMovieInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${vp767(css`
    display: grid;
    gap: 8px;
    grid-template-columns: auto 1fr calc(952 / 1280 * 100%);
    align-items: start;
  `)}
`;

export const StyledMovieInfoLabel = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);

  ${vp767(css`
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  `)}
`;

export const StyledMovieInfoDash = styled.div`
  ${vp767(
    css`
      height: 18px;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    `
  )}
`;

export const StyledMovieInfoValue = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  ${vp767(css``)}
`;
