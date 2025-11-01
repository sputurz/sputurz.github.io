import { siteConfig } from '../../../config/site.config';
import styles from './Nav.module.scss';

export function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {siteConfig.navLinks.map((navLink) => (
            <li key={navLink.name}>
              <a
                className={styles.nav__link}
                href={navLink.url}
                aria-label={navLink.name}
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
