import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLanguage } from '@/hooks';
import { Footer } from '@/components';
import { Spinner } from '@/mini-components';
import { Gallery, ProjectsPage } from '@/pages';

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
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<ProjectsPage />} />
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
