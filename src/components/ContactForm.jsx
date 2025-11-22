import React, { useState } from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    preferencia: "email",
    asunto: "Instalacion",
    detalle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Presupuesto para: ${formData.asunto}`;
    const body = `
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Email: ${formData.email}
Preferencia de contacto: ${formData.preferencia}

Detalle:
${formData.detalle}
    `;

    window.location.href = `mailto:fontaneriamarcos24@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contacto</h2>

      <div className="form-grid">
        {/* Nombre */}
        <div className="form-group">
          <label>Nombre de contacto</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label>Teléfono de contacto</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email de contacto</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Preferencia de contacto */}
        <div className="form-group">
          <label>Preferencia de contacto</label>
          <select
            name="preferencia"
            value={formData.preferencia}
            onChange={handleChange}
          >
            <option value="telefono">Teléfono</option>
            <option value="email">Email</option>
          </select>
        </div>

        {/* Asunto */}
        <div className="form-group full-width">
          <label>Asunto</label>
          <select name="asunto" value={formData.asunto} onChange={handleChange}>
            <option value="Instalacion">Instalación</option>
            <option value="Reparacion">Reparación</option>
            <option value="Nueva obra">Nueva obra</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* Detalle */}
        <div className="form-group full-width">
          <label>Detalle</label>
          <textarea
            name="detalle"
            value={formData.detalle}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
