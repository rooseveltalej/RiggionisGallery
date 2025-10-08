import './App.css';
import { useLanguage } from '@/hooks';
import {Footer} from '@/components';
import { H1 } from '@/mini-components';

function App() {
  const { languageStrings, loading } = useLanguage();

  if (loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <div className="app">
      <header>
        <H1>{languageStrings.navbar?.routes?.gallery}</H1>
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