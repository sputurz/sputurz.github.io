import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px 0 24px;

  ${vp767(css`
    padding-top: 40px;
  `)}
`;

export const StyledLoginFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${vp767(css``)}
`;

export const StyledLoginFormBtn = styled.button`
  ${BtnPrimaryStyles}

  width: 100%;
  ${vp767(css``)}
`;

export const StyledLoginFormErrorText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ff7575;
`;
