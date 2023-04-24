import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Community from './pages/community/Community';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
