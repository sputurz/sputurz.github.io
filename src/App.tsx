import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/hero';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="content">
        <h1>Параллакс Эффект на React + TypeScript</h1>
        <p>Прокрутите вниз, чтобы увидеть эффект.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
