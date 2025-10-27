import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLanguage } from "@/hooks";
import { Footer } from "@/components";
import { Spinner } from "@/mini-components";
import { Gallery, ProjectsPage } from "@/pages";
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
          ]}
          logoSrc={"/icons/logo.svg"}
          logoAlt={languageStrings?.navbar?.logoAlt || "Logo"}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer
          generalTitles={
            languageStrings.general_titles ?? {
              company_name: "Nombre de la empresa",
              artist_info: {
                labels: {
                  name: "",
                  degree: "",
                  phone: "",
                  email1: "",
                  email2: "",
                },
                values: {
                  name: "",
                  degree: "",
                  phone: "",
                  email1: "",
                  email2: "",
                },
                social_media: { instagram: "", facebook: "", linkedin: "" },
              },
              whatsapp_messages: {
                contact_general: "",
                quote_request: "",
                artist_info: "",
              },
            }
          }
          footerData={
            languageStrings.footer ?? {
              copyright: "",
              developers: { title: "", team: [] },
            }
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
