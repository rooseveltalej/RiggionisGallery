import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import { Navbar } from "./components/navbar";
import type { NavItem } from "./components/navbar";
import logoBlanco from "./assets/images/logo/Blanco - Vino.png";

const navigationItems: NavItem[] = [
  { label: "Galería", path: "/galeria" },
  { label: "Artista", path: "/artista" },
  { label: "Contacto", path: "/contact" },
  { label: "Cotizar", path: "/cotizar" },
];

function App() {
  return (
    <Router>
      <Navbar
        navItems={navigationItems}
        logoSrc={logoBlanco}
        logoAlt="Riggioni's Gallery"
      />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/galeria"
          element={
            <div style={{ padding: "2rem" }}>
              Página de Galería (próximamente)
            </div>
          }
        />
        <Route
          path="/artista"
          element={
            <div style={{ padding: "2rem" }}>
              Página del Artista (próximamente)
            </div>
          }
        />
        <Route
          path="/cotizar"
          element={
            <div style={{ padding: "2rem" }}>
              Página de Cotización (próximamente)
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div style={{ padding: "2rem" }}>
              Bienvenido a Riggioni's Gallery
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
