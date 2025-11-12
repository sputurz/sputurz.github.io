// import { useEffect, useRef, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';

function App() {
  // const [activeSection, setActiveSection] = useState('hero');
  // const heroRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY + 100;

  //     if (aboutRef.current && scrollY >= aboutRef.current.offsetTop) {
  //       setActiveSection('about');
  //     } else if (heroRef.current && scrollY >= heroRef.current.offsetTop) {
  //       setActiveSection('hero');
  //     }
  //   };

  //   // Оптимизация с requestAnimationFrame
  //   let ticking = false;
  //   const onScroll = () => {
  //     if (!ticking) {
  //       requestAnimationFrame(() => {
  //         handleScroll();
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', onScroll);
  //   handleScroll(); // Инициализация при загрузке

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      <About />
      <Footer />
    </>
  );
}

export default App;
