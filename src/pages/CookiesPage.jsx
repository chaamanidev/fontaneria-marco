import { Link } from "react-router-dom";
import "../styles/CookiesPage.css";

export default function CookiesPage() {
  return (
    <main className="cookies-page">
      <h1>Política de Cookies</h1>

      <section className="cookies-section">
        <h2>1. Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo
          cuando visitas nuestro sitio web. Se utilizan para que el sitio
          recuerde tus preferencias y para facilitar el uso de ciertas
          funciones.
        </p>
      </section>

      <section className="cookies-section">
        <h2>2. Cookies que utilizamos</h2>
        <p>
          En <strong>Fontanería Marcos</strong> usamos principalmente cookies
          necesarias y de funcionalidad:
        </p>
        <ul>
          <li>
            <strong>Cookies estrictamente necesarias:</strong> Permiten la
            navegación por la web y el correcto funcionamiento del sitio.
          </li>
          <li>
            <strong>Cookies de funcionalidad:</strong> Guardan tus preferencias,
            como el aviso de aceptación de cookies, para que no tengas que
            volver a aceptarlas en futuras visitas.
          </li>
        </ul>
        <p>
          No utilizamos cookies de seguimiento ni publicitarias. Si en algún
          momento añadimos servicios externos (como Google Analytics o chat en
          línea), actualizaremos esta política y se informará a los usuarios.
        </p>
      </section>

      <section className="cookies-section">
        <h2>3. Cómo gestionar o eliminar cookies</h2>
        <p>
          Puedes configurar tu navegador para rechazar o eliminar cookies. Ten
          en cuenta que algunas funciones de la web podrían no funcionar
          correctamente si desactivas las cookies necesarias.
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía para Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-guardan-en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía para Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía para Safari
            </a>
          </li>
        </ul>
      </section>

      <section className="cookies-section">
        <h2>4. Aceptación de cookies</h2>
        <p>
          Al continuar navegando en esta página, aceptas el uso de cookies
          descritas en esta política. Puedes cambiar tu configuración de cookies
          en cualquier momento mediante tu navegador.
        </p>
      </section>

      <section className="cookies-section">
        <h2>5. Contacto</h2>
        <p>
          Si tienes dudas sobre nuestra política de cookies, puedes contactarnos
          a través de nuestro correo:{" "}
          <a href="mailto:fontaneriamarcos24@gmail.com">
            fontaneriamarcos24@gmail.com
          </a>
          .
        </p>
      </section>

      {/* Botón para volver al inicio */}
      <div className="cookies-back-button">
        <Link to="/" className="btn-volver">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
