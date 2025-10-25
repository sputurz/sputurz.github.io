// import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';
import './SimpleParallaxHero.css';

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${offset * 0.8}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="parallax-container">
        <div ref={parallaxRef} className="parallax"></div>
        <div className="overlay1"></div>
      </div>
      <div className="content">
        <h1>Параллакс Эффект на React + TypeScript</h1>
        <p>Прокрутите вниз, чтобы увидеть эффект.</p>
      </div>
    </>
  );
}
