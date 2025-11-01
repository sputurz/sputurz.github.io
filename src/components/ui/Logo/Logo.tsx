import styles from './Logo.module.scss';

export function Logo() {
  return (
    <a className={styles.logo} href="#" aria-label="Main Page">
      <img className={styles.logo__img} src={'/logoBlack.svg'}></img>
    </a>
  );
}
