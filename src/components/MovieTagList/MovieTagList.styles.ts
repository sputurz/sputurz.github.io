import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';

export const StyledMovieTagList = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${vp767(css`
    > span {
      font-size: 18px;
      line-height: 24px;
    }
  `)}
`;

export const StyledMovieTagListYear = styled.span``;

export const StyledMovieTagListRuntime = styled.span``;

export const StyledMovieTagListGenres = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc((115 / 335) * 100%);
  ${vp1023(css`
    max-width: calc((325 / 580) * 100%);
  `)}
`;
