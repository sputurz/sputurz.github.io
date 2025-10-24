// import styles from './Hero.module.scss';
import { useEffect, useRef } from 'react';
import './SimpleParallaxHero.css';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !bgRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const speed = 0.2; // фон движется в 5 раз медленнее
      bgRef.current.style.transform = `translateY(${rect.top * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={heroRef} className="hero">
        <div ref={bgRef} className="hero-bg"></div>
        <h1>Добро пожаловать!</h1>
      </div>
      <div style={{ height: '200vh' }}></div>
    </>
  );
}
