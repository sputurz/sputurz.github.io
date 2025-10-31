declare module '*.module.scss' {
  const classes: { readonly [key: string]: string | undefined };
  export default classes;
}

declare module '*.svg?react' {
  import React from 'react';
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}
