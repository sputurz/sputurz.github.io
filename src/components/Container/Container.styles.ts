import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';

export const StyleContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  min-width: 375px;

  ${vp767(css`
    padding: 0 40px;
  `)}

  ${vp1023(css`
    padding: 0 80px;
  `)}
`;
