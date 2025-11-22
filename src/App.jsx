// src/App.jsx
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Servicios from "./pages/Servicios.jsx";
import Contacto from "./pages/Contacto.jsx";
import LegalPage from "./pages/LegalPAge.jsx";
import CookiesPage from "./pages/CookiesPage.jsx";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/aviso-legal" element={<LegalPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </>
  );
}
