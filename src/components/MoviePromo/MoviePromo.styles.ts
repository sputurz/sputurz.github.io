import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';
import { BtnSecondaryStyles } from '../../styles/global/BtnSecondary';
import { Link } from 'react-router-dom';
import { ImageLoader } from '../ImageLoader';

export const StyledMoviePromo = styled.section`
  position: relative;
`;

export const StyledMoviePromoInner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;

  ${vp1023(
    css`
      grid-template-columns: 1fr minmax(0, calc(680 / 1280 * 100%));
      grid-template-areas: 'content image';
      align-items: start;
      gap: 0;
      padding-top: 32px;
    `
  )}
`;

export const StyledMoviePromoImgContainer = styled(ImageLoader)`
  img {
    width: 100%;
    border-radius: 16px;
  }

  ${vp1023(
    css`
      grid-area: image;
    `
  )}
`;

export const StyledMoviePromoWrap = styled.div<{ $isAboutMovie?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${vp1023(css`
    grid-area: content;
    padding: 74px 20px 0 0;
    grid-column: 1;
    grid-row: 1;
  `)}

  ${({ $isAboutMovie }) =>
    !$isAboutMovie &&
    vp1023(css`
      height: 550px;
      justify-content: space-between;
    `)}
`;

export const StyledMoviePromoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${vp1023(css`
    gap: 16px;
  `)}
`;

export const StyledMoviePromoTagText = styled.div`
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

export const StyledMoviePromoTitle = styled.h2<{ $isAboutMovie?: boolean }>`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  ${vp767(css`
    font-size: 48px;
    line-height: 56px;
  `)}

  ${({ $isAboutMovie }) =>
    !$isAboutMovie &&
    vp767(css`
      max-height: 120px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`;

export const StyledMoviePromoPlot = styled.p<{ $isAboutMovie?: boolean }>`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
  `)}

  ${({ $isAboutMovie }) =>
    !$isAboutMovie &&
    vp767(css`
      max-height: 96px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    `)}
`;

export const StyledMoviePromoBtnWrap = styled.div<{ $isAboutMovie?: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;

  grid-template-columns: ${(props) =>
    props.$isAboutMovie ? '1fr auto' : '1fr auto auto'};

  & > button:first-child {
    grid-column: ${(props) => (props.$isAboutMovie ? 'span 1' : 'span 3')};
  }

  ${vp1023(css``)}
`;

export const StyledMoviePromoBtnVideo = styled.button`
  ${BtnPrimaryStyles}

  ${vp1023(css``)}
`;

export const StyledMoviePromoBtnUpd = styled.button`
  ${BtnSecondaryStyles}
  width: 68px;

  ${vp1023(css``)}
`;

export const StyledMoviePromoLinkAbout = styled(Link)<{
  $iSdisabled?: boolean;
}>`
  ${BtnSecondaryStyles}

  ${({ $iSdisabled }) =>
    $iSdisabled &&
    css`
      color: rgba(255, 255, 255, 0.5);
      pointer-events: none;
      background: #747474;
    `}
`;

export const StyledMoviePromoBtnLike = styled.button<{ $isLiked?: boolean }>`
  ${BtnSecondaryStyles}
  width: 68px;

  svg {
    width: 24px;
    height: 24px;

    color: ${({ $isLiked }) => ($isLiked ? '#B4A9FF' : 'transparent')};
    stroke: ${({ $isLiked }) => ($isLiked ? 'transparent' : '#ffffff')};
    stroke-width: 1.5;
  }

  &:focus-visible svg,
  &:hover svg {
    stroke: ${({ $isLiked }) => ($isLiked ? 'transparent' : '#0c0707ff')};
    color: ${({ $isLiked }) => ($isLiked ? '#B4A9FF' : 'transparent')};
  }
`;
