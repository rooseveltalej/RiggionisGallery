import React, { createContext, useEffect, useState } from "react";
import { fetchRemoteConfig } from "../../firebase/remoteConfig";
import type { 
  RemoteConfigCache, 
  LanguageContextProps, 
  LanguageProviderProps,
  LanguageData
} from "./LanguageContext.interface";

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const CACHE_KEY = "remoteconfig_cache";
const CACHE_DURATION = 86400000; // 24 horas

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [allLanguages, setAllLanguages] = useState<LanguageData>({});
  const [language, setLanguage] = useState("spanish");
  const [loading, setLoading] = useState(true);

  const getCachedData = (): LanguageData | null => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const parsedCache: RemoteConfigCache = JSON.parse(cached);
      const now = Date.now();

      if (now - parsedCache.timestamp < CACHE_DURATION) {
        return parsedCache.data;
      } else {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
    } catch (error) {
      console.error('Error reading cache:', error);
      return null;
    }
  };

  const setCachedData = (data: LanguageData) => {
    try {
      const cacheData: RemoteConfigCache = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const cachedData = getCachedData();
      
      if (cachedData) {
        setAllLanguages(cachedData);
        setLoading(false);
        return;
      }

      try {
        const data = await fetchRemoteConfig();
        
        if (data && typeof data === "object") {
          setAllLanguages(data as LanguageData);
          setCachedData(data as LanguageData);
        }
      } catch (error) {
        console.error('Error fetching remote config:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const languageStrings = allLanguages[language] || {};
  const availableLanguages = Object.keys(allLanguages);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        languageStrings, 
        availableLanguages, 
        loading 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};