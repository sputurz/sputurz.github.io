// import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';
import './SimpleParallaxHero.css';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !bgRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      // Коэффициент скорости параллакса
      const speed = 0.07; // медленно, почти в 14 раз медленнее блока

      // Смещение фона относительно текущего положения Hero
      const offset = -rect.top * speed;

      bgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // стартовое положение
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section ref={heroRef} className="hero">
        <div ref={bgRef} className="hero-bg" />
        <h1>Добро пожаловать!</h1>
      </section>
      <div style={{ height: '200vh', background: '#f0f0f0' }} />
    </>
  );
}
