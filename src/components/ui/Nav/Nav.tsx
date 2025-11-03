import { useState } from 'react';
import { siteConfig } from '../../../config/site.config';
import styles from './Nav.module.scss';

export function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`
            ${styles.nav} ${isMenuOpen ? styles['nav--open-burger'] : ''}
          `}
      >
        <ul className={styles.nav__list}>
          {siteConfig.navLinks.map((navLink) => (
            <li className={styles['nav__list-item']} key={navLink.name}>
              <a
                className={styles.nav__link}
                href={navLink.url}
                aria-label={navLink.name}
                onClick={onMenuOpen}
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={styles.nav__burger}
          onClick={onMenuOpen}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
          <div className={styles['nav__burger-line']}></div>
        </button>
      </nav>
    </>
  );
}
