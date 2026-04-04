import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';
import Home from './pages/home/Home';
import ScrollToTop from './components/atoms/scroll-to-top/ScrollToTop';

function App() {
  const linksList = [
    { name: 'El problema', link: 'problema' },
    { name: 'Modelo', link: 'modelo' },
    { name: 'Servicios', link: 'servicios' },
    { name: 'Impacto', link: 'impacto' },
    { name: 'Nosotros', link: 'nosotros' },
  ];

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header linksList={linksList} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
