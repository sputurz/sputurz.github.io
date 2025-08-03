import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyleFooter = styled.footer`
  padding: 24px 0;

  ${vp767(css`
    padding: 40px 0;
  `)}
`;
