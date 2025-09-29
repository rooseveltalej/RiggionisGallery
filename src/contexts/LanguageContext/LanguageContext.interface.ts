export interface RemoteConfigCache {
  //NOTE: Using 'any' here because the JSON structure from remote config can change frequently.
  data: any;
  timestamp: number;
}

export interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  //NOTE: Using 'any' here because the JSON structure from remote config can change frequently.
  languageStrings: any;
  availableLanguages: string[];
  loading: boolean;
}

export interface LanguageProviderProps {
  children: React.ReactNode;
}