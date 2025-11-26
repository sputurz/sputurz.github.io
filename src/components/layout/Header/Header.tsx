import { Logo } from '../../ui/Logo';
import { Nav } from '../../ui/Nav';

import styles from './Header.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__wrap}>
          <Logo className={styles.header__logo} />
          <Nav />
        </div>
      </header>
    </>
  );
}
