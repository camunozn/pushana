import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Community from './pages/community/Community';
import Blog from './pages/blog/Blog';
import Header from './components/organisms/header/Header';
import Footer from './components/organisms/footer/Footer';
import Consulting from './pages/consulting/Consulting';
import Software from './pages/software/Software';

function App() {
  const linksList = [
    { name: 'Inicio', link: '/' },
    { name: 'Consultoría', link: '/consulting' },
    { name: 'Pushana App', link: '/software' },
    { name: 'Comunidad', link: '/community' },
    { name: 'Nosotros', link: '/about' },
  ];

  return (
    <HashRouter>
      <div className="App">
        <Header linksList={linksList} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/software" element={<Software />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
