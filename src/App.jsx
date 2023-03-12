import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/Blog';
import Products from './pages/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
