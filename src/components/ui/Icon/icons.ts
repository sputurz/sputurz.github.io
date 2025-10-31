import { lazy } from 'react';

// socials
export const TgIcon = lazy(() => import('../../../assets/icons/tg.svg?react'));

export const GhIcon = lazy(() => import('../../../assets/icons/gh.svg?react'));

export const InstIcon = lazy(
  () => import('../../../assets/icons/inst.svg?react')
);

export const FbIcon = lazy(() => import('../../../assets/icons/fb.svg?react'));

export const RgIcon = lazy(() => import('../../../assets/icons/rg.svg?react'));

// Auto type for icon name
export type IconName = keyof typeof import('./icons');
