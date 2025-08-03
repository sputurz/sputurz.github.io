import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';

export const VideoPlayerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 60;
`;

export const VideoPlayerInner = styled.div`
  position: relative;
  width: min(100vw, calc(100vh * (16 / 9)));
  height: min(100vh, calc(100vw * (9 / 16)));
  aspect-ratio: 16 / 9;
  background-color: #393b3c;

  youtube-video {
    height: 100% !important;
    width: auto !important;
  }

  ${vp767(css`
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: calc(100% - 160px);
    max-width: 960px;
    height: unset;
  `)}
`;

export const VideoPlayerBtnClose = styled.button`
  ${transitionOpacity}

  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 0;
  border: none;

  svg {
    color: #000000;
    width: 16px;
    height: 16px;
  }

  ${vp767(css`
    top: 0;
    right: -72px;
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  `)}
  &:hover {
    opacity: 0.5;
  }

  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #ffffff;
`;

export const VideoPlayerError = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`;
