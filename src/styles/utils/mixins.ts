import { RuleSet } from 'styled-components';
import { vpMobile, vpTablet } from './variables';

// Viewport
export const vp767 = (styles: RuleSet<object>) => `
  @media (min-width: ${vpMobile}) {
    ${styles}
  }
`;

export const vp1023 = (styles: RuleSet<object>) => `
  @media (min-width: ${vpTablet}) {
    ${styles}
  }
`;
