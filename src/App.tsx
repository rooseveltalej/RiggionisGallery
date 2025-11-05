import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLanguage } from "@/hooks";
import { Footer } from "@/components";
import { AVATAR_IMAGE_URL } from "@/utils/constants";
import { Spinner } from "@/mini-components";
import { Gallery, ProjectsPage, Contact, ArtistPage } from "@/pages";
import { Navbar } from "@/components/navbar";

function App() {
  const { languageStrings, loading } = useLanguage();

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
          navItems={[
            {
              label: languageStrings?.navbar?.routes?.gallery || "Galería",
              path: "/",
            },
            {
              label: languageStrings?.navbar?.routes?.projects || "Proyectos",
              path: "/projects",
            },
            {
              label: languageStrings?.navbar?.routes?.contact || "Contacto",
              path: "/contact",
            },
            {
              label: languageStrings?.navbar?.routes?.ArtistPage || "Artista",
              path: "/artist",
            },
          ]}
          logoSrc={AVATAR_IMAGE_URL}
          logoAlt={languageStrings?.navbar?.logoAlt || "Logo"}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artist" element={<ArtistPage />} />
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
