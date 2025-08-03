import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledUserProfile = styled.section`
  padding: 16px 0 152px;

  ${vp767(css`
    padding: 64px 0 120px;
  `)}
`;

export const StyledUserProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${vp767(
    css`
      gap: 64px;
    `
  )}
`;

export const StyledUserProfileTitle = styled.h1`
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
`;
