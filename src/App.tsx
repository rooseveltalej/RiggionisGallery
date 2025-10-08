import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import { Navbar } from "./components/navbar";
import { PageTransition } from "./components/PageTransition";
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
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/galeria"
          element={
            <PageTransition>
              <div style={{ padding: "2rem" }}>
                Página de Galería (próximamente)
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/artista"
          element={
            <PageTransition>
              <div style={{ padding: "2rem" }}>
                Página del Artista (próximamente)
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/cotizar"
          element={
            <PageTransition>
              <div style={{ padding: "2rem" }}>
                Página de Cotización (próximamente)
              </div>
            </PageTransition>
          }
        />
        <Route
          path="/"
          element={
            <PageTransition>
              <div style={{ padding: "2rem" }}>
                Bienvenido a Riggioni's Gallery
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
