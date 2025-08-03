import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';

export const StyledRegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px 0 24px;

  ${vp767(css`
    padding-top: 40px;
  `)}
`;

export const StyledRegistrationFormTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  text-align: center;
`;

export const StyledRegistrationFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledRegistrationFormBtn = styled.button`
  ${BtnPrimaryStyles}

  width: 100%;
`;

export const StyledRegistrationFormErrorText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ff7575;
`;
