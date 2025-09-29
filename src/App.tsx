import './App.css';
import Footer from './components/footer/Footer';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { languageStrings, loading } = useLanguage();

  if (loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>{languageStrings.navbar?.routes?.gallery}</h1>
      </header>

      <main className="main-content">
        {/* Tu contenido principal */}
      </main>

      <Footer 
        generalTitles={languageStrings.general_titles}
        footerData={languageStrings.footer}
      />
    </div>
  );
}

export default App;