// import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';
import './SimpleParallaxHero.css';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !bgRef.current) return;

      const sectionTop = heroRef.current.offsetTop;
      const scrollY = window.scrollY;
      const speed = 0.1; // фон движется в 5 раз медленнее

      // Вычисляем смещение относительно положения секции
      const offset = (scrollY - sectionTop) * speed;

      bgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <section ref={heroRef} className="hero">
        <div ref={bgRef} className="hero-bg" />
        <h1>Добро пожаловать!</h1>
      </section>
      <div style={{ height: '200vh', background: '#eee' }} />
    </>
  );
}
