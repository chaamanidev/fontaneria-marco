import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiciosComponent.css";

export default function ServiciosComponent() {
  const servicios = [
    {
      id: 1,
      img: "images/instalacion.png",
      titulo: "Instalación y Mantenimiento",
      descripcion:
        "Sistemas de tuberías para agua (fría y caliente), gas y calefacción...",
    },
    {
      id: 2,
      img: "images/reparacion.png",
      titulo: "Reparación y Rehabilitación",
      descripcion:
        "Diagnóstico y reparación de fugas, atascos en desagües o fallos en calderas...",
    },
    {
      id: 3,
      img: "images/completo.png",
      titulo: "Acabados Extra",
      descripcion:
        "Servicios complementarios como pladur, pintura, colocación de suelos...",
    },
  ];

  return (
    <section className="servicios">
      <div className="introduccion">
        <img
          className="logo"
          src="images/FontaneriaMarcos.png"
          alt="Logo de fontanería Marcos."
        />
        <p>
          Llevo más de 10 años dedicándome al mundo de la fontanería, trabajando
          tanto en instalaciones nuevas como en mantenimiento y reparaciones de
          sistemas de agua, gas y calefacción.
        </p>
        <p>
          Mi objetivo es garantizar que todo funcione a la perfección y que tú
          puedas despreocuparte.
        </p>
        <p>
          Escucho tus necesidades, explico las soluciones de manera clara y me
          aseguro de que cada trabajo quede impecable.
        </p>
        <p>
          Confía en un profesional que pone tu comodidad y seguridad por
          delante, y que trabaja con pasión para que tu hogar funcione siempre
          como debe.
        </p>
        <p className="subtitulo">Principales servicios:</p>
      </div>

      <div className="servicios-lista">
        {servicios.map((serv, index) => (
          <FlipCard
            key={index}
            titulo={serv.titulo}
            descripcion={serv.descripcion}
            img={serv.img}
          />
        ))}
      </div>

      <div className="presupuesto-boton">
        <Link to="/contacto" className="btn-presupuesto">
          Pida presupuesto
        </Link>
      </div>
      <img
        className="logo"
        src="images/FontaneriaMarcos.png"
        alt="Logo de fontanería Marcos."
      />
    </section>
  );
}

function FlipCard({ titulo, descripcion, img }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="servicio-card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div
          className="card-front"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3>{titulo}</h3>
          <span className="click-here">Más</span>
        </div>
        <div className="card-back">
          <p>{descripcion}</p>
          <span className="click-here-back">Volver</span>
        </div>
      </div>
    </div>
  );
}
