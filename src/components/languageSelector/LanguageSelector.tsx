import React, { useMemo } from "react";
import { useLanguage } from "@/hooks";
import Select from "@/mini-components/select/Select";
import styles from "@/components/languageSelector/LanguageSelector.module.css";

const languageSelectorWrapper = styles["language-selector-wrapper"];
const languageSelectorSelect = styles["language-selector-select"];

const ARIA_LABEL = "Selector de idioma";
const TITLE = "Selecciona tu idioma preferido";

const LanguageSelector: React.FC = () => {
  const { language, availableLanguages, languageStrings } = useLanguage();

  const selectOptions = useMemo(
    () =>
      availableLanguages.map((lang) => ({
        value: lang,
        label: languageStrings?.navbar?.languages?.[lang] || lang,
      })),
    [availableLanguages, languageStrings]
  );

  return (
    <div className={languageSelectorWrapper}>
      <Select
        options={selectOptions}
        value={language}
        className={languageSelectorSelect}
        style={{ minWidth: 100 }}
        aria-label={ARIA_LABEL}
        title={TITLE}
      />
    </div>
  );
};

export default LanguageSelector;
