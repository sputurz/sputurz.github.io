import styled, { css, keyframes } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${vp767(css``)}
  z-index: 10;
`;

export const StyledLoaderInner = styled.div`
  border: 4px solid rgba(131, 131, 131, 1); /* Полупрозрачный белый */
  border-top: 4px solid white; /* Белая полоса */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite; /* Применяем анимацию */

  ${vp767(css``)}
`;
