import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchRemoteConfig } from "../../firebase/remoteConfig";

export type Languages = Record<string, Record<string, string>>;

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  availableLanguages: string[];
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [languages, setLanguages] = useState<Languages>({});
  const [language, setLanguage] = useState("spanish");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRemoteConfig().then((data) => {
      if (data && typeof data === "object") setLanguages(data as Languages);
      setLoading(false);
    });
  }, []);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = languages[language];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };
  const availableLanguages = Object.keys(languages);

  if (loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};