import "../styles/Muestrario.css";

export default function Muestrario() {
  const trabajos = [
    { id: 1, src: "images/inodoro.jpg", alt: "Mantenimiento de inodoros" },
    { id: 2, src: "images/tuberias.jpg", alt: "Reparación de tuberías" },
    { id: 3, src: "images/ducha.jpg", alt: "Montaje de ducha" },
    { id: 4, src: "images/caldera.jpg", alt: "Sistemas de calefacción" },
  ];

  return (
    <section className="muestrario">
      <div className="contenedor">
        {/* Columna izquierda: cards */}
        <div className="galeria">
          {trabajos.map((trabajo) => (
            <div key={trabajo.id} className="imagen-card">
              <img src={trabajo.src} alt={trabajo.alt} />
              <p>{trabajo.alt}</p>
            </div>
          ))}
        </div>

        {/* Columna derecha: video */}
        <div className="video-section">
          <video autoPlay loop muted playsInline>
            <source src="video/Mi video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <p className="video-text"></p>
        </div>
      </div>
    </section>
  );
}
