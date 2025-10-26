import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';
import './SimpleParallaxHero.css';

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY;
        bgRef.current.style.backgroundPositionY = `${offset * 0.8}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div ref={bgRef} className={styles.hero__bg}></div>
        <div className={styles.hero__overlay}></div>
        <div className={styles.hero__wrap}>
          <h1 className={styles.hero__title}>
            I am Raman Mikulich.
            <br></br> I am a Frontend
            <br></br>developer based in Minsk.
          </h1>
          <div className={styles['hero__link-wrap']}>
            <a className={styles.hero__link} href="#">
              Latest Projects
            </a>
            <a className={styles.hero__link} href="#">
              More About Me
            </a>
          </div>
          <span className={styles.hero__greeting}>Hello There</span>
          <a className={styles['hero__scrool-link']} href="#">
            Scroll Down
          </a>
        </div>
      </section>

      <div className="content">
        <h1>Параллакс Эффект на React + TypeScript</h1>
        <p>Прокрутите вниз, чтобы увидеть эффект.</p>
      </div>
    </>
  );
}
