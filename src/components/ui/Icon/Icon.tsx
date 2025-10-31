import * as Icons from './icons';

export function Icon({ name }: { name: keyof typeof Icons }) {
  const LazyIcon = Icons[name];
  return <LazyIcon />;
}
