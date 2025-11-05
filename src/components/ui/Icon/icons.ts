import { lazy } from 'react';

// socials
export const TgIcon = lazy(
  () => import('../../../assets/icons/socials/tg.svg?react')
);

export const GhIcon = lazy(
  () => import('../../../assets/icons/socials/gh.svg?react')
);

export const InstIcon = lazy(
  () => import('../../../assets/icons/socials/inst.svg?react')
);

export const FbIcon = lazy(
  () => import('../../../assets/icons/socials/fb.svg?react')
);

export const RgIcon = lazy(
  () => import('../../../assets/icons/socials/rg.svg?react')
);

// skills
export const AxiosIcon = lazy(
  () => import('../../../assets/icons/skills/axios.svg?react')
);

export const CssIcon = lazy(
  () => import('../../../assets/icons/skills/css.svg?react')
);

export const FigmaIcon = lazy(
  () => import('../../../assets/icons/skills/figma.svg?react')
);

export const HookformIcon = lazy(
  () => import('../../../assets/icons/skills/hookform.svg?react')
);

export const HtmlIcon = lazy(
  () => import('../../../assets/icons/skills/html.svg?react')
);

export const JestIcon = lazy(
  () => import('../../../assets/icons/skills/jest.svg?react')
);

export const JsIcon = lazy(
  () => import('../../../assets/icons/skills/js.svg?react')
);

export const PsIcon = lazy(
  () => import('../../../assets/icons/skills/ps.svg?react')
);

export const ReactQueryIcon = lazy(
  () => import('../../../assets/icons/skills/react-query.svg?react')
);

export const ReduxIcon = lazy(
  () => import('../../../assets/icons/skills/redux.svg?react')
);

export const ReactIcon = lazy(
  () => import('../../../assets/icons/skills/react.svg?react')
);

export const RestApiIcon = lazy(
  () => import('../../../assets/icons/skills/restapi.svg?react')
);

export const ScssIcon = lazy(
  () => import('../../../assets/icons/skills/scss.svg?react')
);

export const StyledCompIcon = lazy(
  () => import('../../../assets/icons/skills/styled-components.svg?react')
);

export const TsIcon = lazy(
  () => import('../../../assets/icons/skills/ts.svg?react')
);

export const ViteIcon = lazy(
  () => import('../../../assets/icons/skills/vite.svg?react')
);

export const WebpackIcon = lazy(
  () => import('../../../assets/icons/skills/webpack.svg?react')
);

export const ZodIcon = lazy(
  () => import('../../../assets/icons/skills/zod.svg?react')
);

export const NextJsIcon = lazy(
  () => import('../../../assets/icons/skills/next.svg?react')
);

export const NodeIcon = lazy(
  () => import('../../../assets/icons/skills/node.svg?react')
);

export const PyIcon = lazy(
  () => import('../../../assets/icons/skills/python.svg?react')
);

export const OpenCvIcon = lazy(
  () => import('../../../assets/icons/skills/opencv.svg?react')
);

export const ProcessingIcon = lazy(
  () => import('../../../assets/icons/skills/processing.svg?react')
);

export const ArduinoIcon = lazy(
  () => import('../../../assets/icons/skills/arduino.svg?react')
);

export const MySqlIcon = lazy(
  () => import('../../../assets/icons/skills/mysql.svg?react')
);

export const PhpIcon = lazy(
  () => import('../../../assets/icons/skills/php.svg?react')
);

export const SqliteIcon = lazy(
  () => import('../../../assets/icons/skills/sqlite.svg?react')
);

export const DjangoIcon = lazy(
  () => import('../../../assets/icons/skills/django.svg?react')
);

export const CoreldrawIcon = lazy(
  () => import('../../../assets/icons/skills/cd.svg?react')
);

export const VbaIcon = lazy(
  () => import('../../../assets/icons/skills/vba.svg?react')
);

export const OriginProIcon = lazy(
  () => import('../../../assets/icons/skills/originpro.svg?react')
);

export const MathematicaIcon = lazy(
  () => import('../../../assets/icons/skills/mathematica.svg?react')
);

export const MathcadIcon = lazy(
  () => import('../../../assets/icons/skills/mathcad.svg?react')
);

export const OfficeIcon = lazy(
  () => import('../../../assets/icons/skills/office.svg?react')
);

export const SolidWorksIcon = lazy(
  () => import('../../../assets/icons/skills/sw.svg?react')
);

export const AutodeskIcon = lazy(
  () => import('../../../assets/icons/skills/autodesk.svg?react')
);

// Auto type for icon name
export type IconName = keyof typeof import('./icons');
