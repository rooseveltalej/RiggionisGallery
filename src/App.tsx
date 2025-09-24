import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useLanguage } from './utils/context/LanguageContext';
import Paragraph from './mini-components/paragraph/Paragraph';
import Select from './mini-components/select/Select';

function App() {
  const { language, setLanguage, availableLanguages, t } = useLanguage();

  // Opciones para el select usando los nombres traducidos
  const selectOptions = availableLanguages.map((lang) => ({
    value: lang,
    label: t(`navbar.languages.${lang}`)
  }));

  // Handler para el Select mini-component adaptado a evento nativo
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="app-container">
      <header>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>{t('navbar.routes.gallery')}</h1>
        <Select
          options={selectOptions}
          value={language}
          onChange={handleLanguageChange}
        />
      </header>
      <main>
        <h2>{t('general-titles.filters.techniques.oil')}</h2>
        <Paragraph>{t('footer.sections.contact.title')}</Paragraph>
        <Paragraph>{t('gallery-page.search-placeholder')}</Paragraph>
        <Paragraph>{t('artist-page.main-info.title')}</Paragraph>
      </main>
    </div>
  );
}

export default App;
