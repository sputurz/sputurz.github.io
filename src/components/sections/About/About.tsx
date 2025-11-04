import { siteConfig } from '../../../config/site.config';
import styles from './About.module.scss';

export function About() {
  return (
    <>
      <section className={styles.about} id={siteConfig.navLinks.about.name}>
        <h2 className={styles.about__title}>More About Me</h2>
      </section>
    </>
  );
}
