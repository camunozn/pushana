import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ScrollToTop from './components/atoms/scroll-to-top/ScrollToTop';

function App() {
  const linksList = [
    { name: 'Inicio', link: '/' },
    { name: 'Sobre Nosotros', link: '/about' },
  ];

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header linksList={linksList} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
