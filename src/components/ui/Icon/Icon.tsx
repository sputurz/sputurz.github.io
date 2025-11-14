import * as Icons from './icons';
import styles from './Icon.module.scss';
import { Suspense } from 'react';

interface IProps {
  name: keyof typeof Icons;
  className?: string;
}

export function Icon({ name, className }: IProps) {
  const LazyIcon = Icons[name];

  return (
    <span className={`${styles.icon__wrap} ${className}`}>
      <Suspense fallback={<span>...</span>}>
        <LazyIcon />
      </Suspense>
    </span>
  );
}
