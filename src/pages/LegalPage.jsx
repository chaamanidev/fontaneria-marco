import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LegalPage.css";

export default function LegalPage() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleVolver = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/"); // ir a inicio
    }, 300); // coincide con la duración de la transición CSS
  };

  return (
    <main className={`legal-page ${fadeOut ? "fade-out" : ""}`}>
      <h1>Aviso Legal</h1>

      <section className="legal-section">
        <h2>1. Identificación</h2>
        <p>
          Nombre de la empresa: <strong>Fontanería Marcos</strong>.<br />
          Correo electrónico:{" "}
          <a href="mailto:fontaneriamarcos24@gmail.com">
            fontaneriamarcos24@gmail.com
          </a>
          .<br />
          Sitio web: <a href="/">www.fontaneriamarco24h.es</a>.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Objeto</h2>
        <p>
          El presente aviso legal regula el acceso, navegación y uso de este
          sitio web, así como los derechos y obligaciones tanto de los usuarios
          como del propietario.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Propiedad Intelectual</h2>
        <p>
          Todos los contenidos del sitio web, incluidos textos, imágenes y
          logotipos, son propiedad de <strong>Fontanería Marcos</strong>.
          <br />
          El diseño web, desarrollo técnico y código fuente son propiedad de{" "}
          <a
            href="https://www.instagram.com/oriatek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; OriaTek Solutions
          </a>
          .
          <br />
          Queda prohibida la reproducción total o parcial sin autorización
          expresa.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Protección de Datos</h2>
        <p>
          Los datos personales proporcionados por los usuarios se tratarán
          conforme a la normativa vigente en materia de protección de datos,
          exclusivamente para los fines indicados en el sitio web (contacto,
          solicitudes de presupuesto u otras gestiones relacionadas).
          <br />
          Los usuarios pueden ejercer sus derechos de acceso, rectificación,
          supresión y oposición enviando un correo electrónico a{" "}
          <a href="mailto:fontaneriamarcos24@gmail.com">
            fontaneriamarcos24@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Responsabilidad</h2>
        <p>
          Fontanería Marcos no se hace responsable de los posibles errores u
          omisiones en los contenidos del sitio web ni de los daños derivados de
          su uso. El usuario se compromete a utilizar la web de forma adecuada y
          conforme a la ley.
        </p>
      </section>

      <div className="legal-back-button">
        <button className="btn-volver" onClick={handleVolver}>
          Volver al inicio
        </button>
      </div>
    </main>
  );
}
