import React, { createContext, useEffect, useState } from "react";
import { fetchRemoteConfig } from "../../firebase/remoteConfig";
import type { 
  RemoteConfigCache, 
  LanguageContextProps, 
  LanguageProviderProps 
} from "./LanguageContext.interface";

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const CACHE_KEY = "remoteconfig_cache";
const CACHE_DURATION = 86400000; // 24 horas en milisegundos

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [allLanguages, setAllLanguages] = useState<any>({});
  const [language, setLanguage] = useState("spanish");
  const [loading, setLoading] = useState(true);

  const getCachedData = (): any | null => {
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
      return null;
    }
  };

  const setCachedData = (data: any) => {
    try {
      const cacheData: RemoteConfigCache = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      // Error silencioso
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
          setAllLanguages(data);
          setCachedData(data);
        }
      } catch (error) {
        // Error silencioso
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const texts = allLanguages[language] || {};
  const availableLanguages = Object.keys(allLanguages);

  if (loading) {
    return <div>Loading translations...</div>;
  }

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        texts, 
        availableLanguages, 
        loading 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};