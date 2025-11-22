// CookieConsent.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CookieConsent.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent">
      <p>
        Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
        <Link to="/cookies" target="_blank" rel="noopener noreferrer">
          política de cookies
        </Link>
        .
      </p>
      <button onClick={acceptCookies}>Aceptar</button>
    </div>
  );
}
