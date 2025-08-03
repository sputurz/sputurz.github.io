import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  transitionOpacity,
  transitionTransform,
} from '../../styles/utils/variables';

export const StyledMovieCard = styled.div`
  ${transitionTransform}

  position: relative;
  aspect-ratio: 224 / 336;
  display: flex;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  button {
    display: none;
  }

  &:hover button,
  &:focus-within button {
    display: flex;
  }
`;

export const StyledMovieCardLink = styled(Link)`
  ${transitionTransform}

  border-radius: inherit;

  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const StyledMovieCardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const StyledMovieCardRating = styled.span`
  user-select: none;
  width: 62px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  left: -12px;
  top: -12px;
  background: #ffffff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #6a5dc2;
  z-index: 2;
`;

export const StyledMovieCardBtnDelete = styled.button`
  ${transitionOpacity}

  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #ffffff;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.5;
  }
`;
