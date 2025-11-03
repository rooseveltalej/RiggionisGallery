import React from "react";
import { useLanguage } from "@/hooks";
import Select from "@/mini-components/select/Select";
import styles from "@/components/languageSelector/LanguageSelector.module.css";

const languageSelectorWrapper = styles["language-selector-wrapper"];
const languageSelectorSelect = styles["language-selector-select"];

const LanguageSelector: React.FC = () => {
  const { language, availableLanguages, languageStrings } = useLanguage();
  const selectOptions = availableLanguages.map((lang) => ({
    value: lang,
    label: languageStrings?.navbar?.languages?.[lang] || lang,
  }));

  return (
    <div className={languageSelectorWrapper}>
      <Select
        options={selectOptions}
        value={language}
        className={languageSelectorSelect}
        style={{ minWidth: 100 }}
      />
    </div>
  );
};

export default LanguageSelector;
