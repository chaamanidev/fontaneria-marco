import { Link } from "react-router-dom";
import "../styles/FooterComponent.css";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Columna 1: título y navegación */}
        <div className="footer-column">
          <h3>Fontanería Marcos</h3>
          <h5>Servicios 24 horas</h5>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Columna 2: contacto */}
        <div className="footer-column">
          <h3>Contacto</h3>
          <a href="mailto:fontaneriamarcos24@gmail.com">
            📩: fontaneriamarcos24@gmail.com
          </a>
          <a href="tel:+34660552380">📲: +34 660 552 380</a>
        </div>

        {/* Columna 3: legal */}
        <div className="footer-column">
          <h3>Legal</h3>
          <p>
            <Link to="/aviso-legal">Aviso Legal</Link>
          </p>
          <p>
            <Link to="/cookies">Cookies</Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          &copy; {currentYear} Fontanería Marcos.{" "}
          <img src="/images/favicon.ico" alt="Logo Fontanería Marcos" /> Todos
          los derechos reservados.
        </span>
        <span>
          Developed by{" "}
          <a
            href="https://www.instagram.com/oriatek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; OriaTek
            <img src="/images/oriateklogo.png" alt="Logo OriaTek" />
          </a>
        </span>
      </div>
    </footer>
  );
}
