import './App.css';
import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from '@/hooks';
import { Footer, Navbar } from '@/components';
import { Spinner } from '@/mini-components';
import { Gallery, ProjectsPage, Artist, Contact } from '@/pages';
import logo from '@/assets/images/logo/Blanco - Vino.png';
import type { NavItem } from '@/components/navbar/Navbar.interface';

function App() {
    const { languageStrings, loading } = useLanguage();
    const navItems = useMemo<NavItem[]>(() => {
        const routes = languageStrings?.navbar?.routes ?? {};
        return [
            { label: routes?.gallery ?? "Galería", path: "/" },
            { label: routes?.artist ?? "Artista", path: "/artist" },
            { label: routes?.contact ?? "Contacto", path: "/contact" },
            { label: routes?.quote ?? "Cotizar", path: "/projects" },
        ].filter((item) => Boolean(item.label));
    }, [languageStrings]);

    if (loading) {
        return (
            <div className="app" style={{ justifyContent: "center" }}>
                <Spinner />
            </div>
        );
    }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar 
          navItems={navItems}
          logoSrc={logo}
          logoAlt={languageStrings?.general_titles?.company_name ?? "Riggioni's Gallery"}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer 
          generalTitles={languageStrings.general_titles}
          footerData={languageStrings.footer}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
