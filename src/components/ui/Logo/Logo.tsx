import styles from './Logo.module.scss';

export function Logo() {
  return (
    <>
      <img className={styles.logo} src={`/logoBlack.svg`}></img>
    </>
  );
}
