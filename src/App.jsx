import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
