import './App.css';
import { useLanguage } from '@/hooks';
import { Footer } from '@/components';
import { Spinner } from '@/mini-components';
import Gallery from './pages/Gallery';

function App() {
  const { languageStrings, loading } = useLanguage();

  if (loading) {
    return (
      <div className="app" style={{ justifyContent: 'center' }}>
        <Spinner/>
      </div>
    );
  }
  
  if (!languageStrings?.navbar || !languageStrings?.footer) {
    return <div>Error: missing translations</div>;
  }

  return (
    <div className="app">
      <main className="main-content">
        <Gallery />
      </main>

      <Footer 
        generalTitles={languageStrings.general_titles}
        footerData={languageStrings.footer}
      />
    </div>
  );
}

export default App;