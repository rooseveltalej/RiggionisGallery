import './App.css';
import { useLanguage } from '@/hooks';
import {Footer} from '@/components';

function App() {
  const { languageStrings, loading } = useLanguage();

  if (loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <div className="app">
      <main className="main-content">

      </main>

      <Footer 
        generalTitles={languageStrings.general_titles}
        footerData={languageStrings.footer}
      />
    </div>
  );
}

export default App;