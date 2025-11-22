import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContactForm from "../components/ContactForm";
import "../styles/ContactoPage.css";

export default function Contacto() {
  return (
    <>
      <HeaderComponent />
      <div className="contact-info">
        <h1>¿Necesitas presupuesto?</h1>
        <p>¡Contáctame y te ayudaré con tu proyecto!</p>
        <a
          href="https://wa.me/34660552380"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img
            src="images/whatsapp-icon.png"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          <span className="whatsapp-number">Escríbeme</span>
        </a>

        <img
          className="logo"
          src="images/FontaneriaMarcos.png"
          alt="Logo de fontanería Marcos."
        />
      </div>

      <ContactForm />

      <img
        className="logo"
        src="images/FontaneriaMarcos.png"
        alt="Logo de fontanería Marcos."
      />
      <FooterComponent />
    </>
  );
}
