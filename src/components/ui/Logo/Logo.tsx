import styles from './Logo.module.scss';

interface IProps {
  className?: string;
}

export function Logo({ className }: IProps) {
  return (
    <a
      className={`${styles.logo} ${className}`}
      href="#"
      aria-label="Main Page"
    >
      <img className={styles.logo__img} src={'./logoBlack.svg'}></img>
    </a>
  );
}
