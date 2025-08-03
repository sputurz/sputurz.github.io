import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyledInfiniteTrigger = styled.div`
  ${vp767(css`
    position: 'absolute',
      height: 1px,
      width: 100%;
      pointer-events: none;
  `)}
`;
