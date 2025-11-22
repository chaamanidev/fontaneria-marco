import { Link } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import Muestrario from "../components/Muestrario";
import FooterComponent from "../components/FooterComponent";
import CookieConsent from "../components/CookieConsent";
import "../styles/Index.css";

export default function Index() {
  return (
    <>
      <CookieConsent />
      <HeaderComponent />
      <main className="index">
        <section className="intro">
          <img
            className="logo"
            src="images/FontaneriaMarcos.png"
            alt="Logo de fontanería Marcos."
          />
          <h1>
            Servicio profesional y de confianza en todo tipo de instalaciones y
            reparaciones.
          </h1>
        </section>

        <Muestrario />

        <div className="buttons-container">
          <Link to="/servicios" className="Call-to-action">
            Servicios
          </Link>
          <a href="tel:+34660552380" className="Call-to-action urgencia">
            Urgencias
          </a>
          <Link to="/contacto" className="Call-to-action">
            Contacto
          </Link>
        </div>
      </main>

      <img
        className="logo"
        src="images/FontaneriaMarcos.png"
        alt="Logo de fontanería Marcos."
      />
      <FooterComponent />
    </>
  );
}
