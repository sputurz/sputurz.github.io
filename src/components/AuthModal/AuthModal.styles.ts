import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';

export const StyledAuthModalBackdrop = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: env(safe-area-inset-top, 20px);
  z-index: 60;
  background-color: rgba(0, 0, 0, 0.5);

  /* Анимация появления/исчезновения */
  animation: ${({ $isOpen }) => ($isOpen ? 'fadeIn' : 'fadeOut')} 0.7s ease
    forwards;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const StyledAuthModal = styled.div<{ $isOpen: boolean }>`
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  margin: 20px;
  width: 100%;
  max-height: calc(100dvh - 40px);
  z-index: 1;

  /* animation: slideUp 0.3s ease forwards;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  } */

  ${vp767(
    css`
      width: 420px;
      margin: 20px auto;
    `
  )}
`;

export const StyledAuthModalWrap = styled.div<{ $isOpen: boolean }>`
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 64px 20px 32px;
  overflow-y: auto;

  a {
    height: 30px;
    padding: 0;

    ${vp767(
      css`
        height: 35px;
      `
    )}
  }

  ${vp767(
    css`
      padding: 64px 40px;
    `
  )}
`;

export const StyledAuthModalBtnAuthType = styled.button`
  ${transitionOpacity}

  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #000000;

  &:hover {
    opacity: 0.5;
  }

  ${vp767(css``)}
`;

export const StyledAuthModalBtnClose = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  width: 48px;
  height: 48px;
  overflow: unset;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }

  ${vp767(css`
    border-radius: 50%;
    background-color: #ffffff;
    top: 0;
    right: -72px;
  `)}
`;

export const StyledAuthModalBtnLogin = styled.button`
  ${BtnPrimaryStyles}

  width: 100%;
`;

export const StyledAuthModalSuccsessTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  padding-top: 32px;

  ${vp767(css`
    padding-top: 40px;
  `)}
`;

export const StyledAuthModalSuccsessText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding: 24px 0;
`;
