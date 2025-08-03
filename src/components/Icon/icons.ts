import { lazy } from 'react';

// auth
export const CloseIcon = lazy(
  () => import('../../assets/icons/close.svg?react')
);
export const PasswordIcon = lazy(
  () => import('../../assets/icons/password.svg?react')
);
export const MailIcon = lazy(() => import('../../assets/icons/mail.svg?react'));
export const UserIcon = lazy(() => import('../../assets/icons/user.svg?react'));
// socials
export const VkIcon = lazy(() => import('../../assets/icons/vk.svg?react'));
export const YtIcon = lazy(() => import('../../assets/icons/yt.svg?react'));
export const OkIcon = lazy(() => import('../../assets/icons/ok.svg?react'));
export const TgIcon = lazy(() => import('../../assets/icons/tg.svg?react'));
//home
export const UpdateIcon = lazy(
  () => import('../../assets/icons/update.svg?react')
);
//movie/home
export const StarIcon = lazy(() => import('../../assets/icons/star.svg?react'));
export const LikeIcon = lazy(() => import('../../assets/icons/like.svg?react'));
// nav
export const GenresIcon = lazy(
  () => import('../../assets/icons/genres.svg?react')
);
// search
export const SearchIcon = lazy(
  () => import('../../assets/icons/search.svg?react')
);
// movies
export const LeftIcon = lazy(() => import('../../assets/icons/left.svg?react'));

// Автоматический тип для имен иконок
export type IconName = keyof typeof import('./icons');
