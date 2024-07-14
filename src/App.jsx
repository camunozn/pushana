import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Community from './pages/community/Community';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';
import ScrollToTop from './components/atoms/scroll-to-top/ScrollToTop';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  const linksList = [
    { name: 'Inicio', link: '/' },
    { name: 'Recursos', link: '/community' },
    { name: 'Nosotros', link: '/about' },
  ];

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header linksList={linksList} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
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
