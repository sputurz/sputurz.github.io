import { Logo } from '../../ui/Logo';
import { Socials } from '../../ui/Socials';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Logo className={styles.footer__logo} />
        <Socials modifier="footer" />
        <span className={styles.footer__credits}>
          {'Refactor by '}
          <a
            className={styles['footer__credits-link']}
            target="_blank"
            aria-label="Link to Sputurz GitHub Page"
            href="https://github.com/sputurz"
          >
            Sputurz
          </a>
        </span>
      </footer>
    </>
  );
}
