import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';

export const StyledSettingTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(
    css`
      gap: 64px;
    `
  )}
`;

export const StyledSettingTabBtnLogout = styled.button`
  ${BtnPrimaryStyles}

  ${vp767(
    css`
      width: 262px;
    `
  )}
`;

export const StyledSettingTabList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(css``)}
`;

export const StyledSettingTabTextListItem = styled.li`
  display: flex;
  gap: 16px;

  ${vp767(css``)}
`;

export const StyledSettingTabTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${vp767(css``)}
`;

export const StyledSettingTabTextLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  & svg {
    width: 24px;
    height: 24px;
  }

  ${vp767(css`
    width: 60px;
    height: 60px;
  `)}
`;

export const StyledSettingTabTag = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);

  ${vp767(css`
    font-size: 18px;
    line-height: 24px;
  `)}
`;

export const StyledSettingTabText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  ${vp767(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;
