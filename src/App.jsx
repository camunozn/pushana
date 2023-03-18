import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/Blog';

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
