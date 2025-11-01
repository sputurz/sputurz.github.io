import { Header } from './components/layout/Header';
import { Hero } from './components/sections/hero';

function App() {
  return (
    <>
      <Header />
      <Hero></Hero>
      <div className="content">
        <h1>Параллакс Эффект на React + TypeScript</h1>
        <p>Прокрутите вниз, чтобы увидеть эффект.</p>
      </div>
    </>
  );
}

export default App;
