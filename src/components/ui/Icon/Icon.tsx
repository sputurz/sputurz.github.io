import * as Icons from './icons';

interface IProps {
  name: keyof typeof Icons;
  className?: string;
}

export function Icon({ name, className }: IProps) {
  const LazyIcon = Icons[name];
  return <LazyIcon className={className} viewBox="0 0 24 24" />;
}
