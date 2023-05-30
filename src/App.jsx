import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Community from './pages/community/Community';
import Blog from './pages/blog/Blog';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';
import Consulting from './pages/consulting/Consulting';
import Software from './pages/software/Software';
import ScrollToTop from './components/atoms/scroll-to-top/ScrollToTop';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import FreeTrial from './pages/free-trial/FreeTrial';

function App() {
  const linksList = [
    { name: 'Inicio', link: '/' },
    { name: 'Consultoría', link: '/consulting' },
    { name: 'Software', link: '/software' },
    { name: 'Comunidad', link: '/community' },
    { name: 'Blog', link: '/blog' },
  ];

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header linksList={linksList} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/software" element={<Software />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-trial" element={<FreeTrial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
