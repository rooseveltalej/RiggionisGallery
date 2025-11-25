import { useContext } from "react";
import { LanguageContext, type LanguageContextProps } from "@/contexts";

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
