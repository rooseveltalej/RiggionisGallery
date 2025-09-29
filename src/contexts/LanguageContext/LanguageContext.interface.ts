export interface RemoteConfigCache {
  data: any;
  timestamp: number;
}

export interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  languageStrings: any;
  availableLanguages: string[];
  loading: boolean;
}

export interface LanguageProviderProps {
  children: React.ReactNode;
}