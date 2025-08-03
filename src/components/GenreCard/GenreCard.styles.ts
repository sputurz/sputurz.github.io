import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';
import { transitionTransform } from '../../styles/utils/variables';

export const StyledCard = styled(Link)`
  ${transitionTransform}

  height: 100%;
  background: #0a0b0b;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledCardImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(220 / 335 * 100%);
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  background: #1a1a1a;

  ${vp767(css`
    padding-top: calc(220 / 290 * 100%);
  `)}
`;

export const StyledCardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const StyledCardName = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
  padding: 22px 0 30px;

  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`;
