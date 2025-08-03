import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledErrorFallback = styled.p`
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
