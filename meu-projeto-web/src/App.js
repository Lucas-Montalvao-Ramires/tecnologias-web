// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Início</Link> | <Link to="/cadastro">Cadastro</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
