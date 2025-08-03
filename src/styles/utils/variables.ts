import { css } from 'styled-components';

// Viewport
export const vpMobile = `767px`;
export const vpTablet = `1023px`;

// Animation
export const transition = (property: string) => css`
  transition: ${property} ease-in 0.3s;
`;

export const transitionOpacity = css`
  ${transition('opacity')}
`;

export const transitionTransform = css`
  ${transition('transform')}
`;

export const transitionColor = css`
  ${transition('color')}
`;

export const transitionBorderColor = css`
  ${transition('border-color')}
`;

export const transitionBgrColor = css`
  ${transition('background-color')}
`;
