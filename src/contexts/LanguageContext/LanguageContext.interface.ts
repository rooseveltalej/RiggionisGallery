export interface LanguageData {
  [languageKey: string]: Record<string, any>;
}

export interface RemoteConfigCache {
  data: LanguageData;
  timestamp: number;
}

export interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  languageStrings: Record<string, any>;
  availableLanguages: string[];
  loading: boolean;
}

export interface LanguageProviderProps {
  children: React.ReactNode;
}