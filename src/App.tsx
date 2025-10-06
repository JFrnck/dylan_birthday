import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";



export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="logo">CUMPLE<span>CRAFT</span></Link>
        <nav className="nav">
          <Link to="/">Inicio</Link>

        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>

      <footer className="footer">
        <p>Hecho con ❤ y bloques</p>
      </footer>
    </div>
  );
}
