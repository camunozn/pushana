import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/UI/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/Blog';
import Software from './pages/Software/Software';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/software" element={<Software />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
