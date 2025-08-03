import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { transitionOpacity } from '../../styles/utils/variables';

export const StyledSearchBtnMobile = styled.button`
  ${transitionOpacity}

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px 0;
  background-color: transparent;

  svg {
    color: #ffffff;
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }

  ${vp767(css`
    display: none;
  `)}
`;

export const StyledSearchBackdrop = styled.div<{ $isMobileSearch?: boolean }>`
  position: ${(props) => (props.$isMobileSearch ? 'absolute' : 'fixed')};
  inset: 0;
  background-color: ${(props) =>
    props.$isMobileSearch ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  z-index: 49;
  pointer-events: ${(props) => (props.$isMobileSearch ? 'unset' : 'none')};
`;

export const StyledSearchWrap = styled.label<{ $isMobileSearch?: boolean }>`
  position: absolute;
  display: ${(props) => (props.$isMobileSearch ? 'flex' : 'none')};
  top: 12px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 50;

  & > input {
    width: 100%;
    caret-color: #ffffff;
    color: #ffffff;
    background: #393b3c;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 12px 52px 12px 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }

  & > input ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus-within > input,
  &:focus-within > textarea {
    outline: none;
    border-color: #b4a9ff;
  }

  &:hover > input,
  &:hover > textarea {
    border-color: #b4a9ff;
  }

  & > svg {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    left: 16px;
  }

  &:focus-within > svg,
  &:hover > svg {
    color: #b4a9ff;
  }

  ${vp767(css`
    position: relative;
    display: flex;
    width: 100%;
    top: unset;
    left: unset;
  `)}
`;

export const StyledSearchBtnReset = styled.button<{ $isEmpty?: boolean }>`
  ${transitionOpacity}

  display: ${(props) => (props.$isEmpty ? 'none' : 'flex')};

  position: absolute;
  top: 12px;
  right: 16px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;

  svg {
    color: rgba(255, 255, 255, 0.5);
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledSearchResultList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
  position: absolute;
  background-color: #393b3c;
  border-radius: 8px;
  z-index: 40;
  width: 100%;
  padding: 24px 20px;
  top: 58px;
  left: 0;
  flex-wrap: nowrap;

  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${vp767(css`
    flex-direction: column;
    top: 62px;
    left: 0;
    padding: 8px;
    overflow-x: unset;

    scrollbar-width: unset;
    &::-webkit-scrollbar {
      display: unset;
    }
  `)}

  @media (min-width: 1200px) {
    margin: 0 0 0 96px;
    width: calc(100% - 96px);
  }
`;

export const StyledSearchResultItem = styled.li`
  width: 220px;

  ${vp767(css`
    width: 100%;
  `)}
`;
