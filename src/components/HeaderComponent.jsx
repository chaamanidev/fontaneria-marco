import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderComponent.css";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <img
        src="images/favicon.ico"
        alt="Logo Fontanería Marco"
        className="logo-header"
      />

      <div className="title-container">
        <h1 className="title">Fontanería Marcos</h1>
        <p className="subtitle">Servicio 24 horas</p>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={handleLinkClick}></div>}

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="link" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="link" onClick={handleLinkClick}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link" onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
