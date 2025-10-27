import React from "react";
import { useLanguage } from "@/hooks";
import Select from "@/mini-components/select/Select";
import styles from "@/components/languageSelector/LanguageSelector.module.css";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, availableLanguages, languageStrings } =
    useLanguage();
  const selectOptions = availableLanguages.map((lang) => ({
    value: lang,
    label: languageStrings?.navbar?.languages?.[lang] || lang,
  }));

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className={styles["language-selector-wrapper"]}>
      <Select
        options={selectOptions}
        value={language}
        onChange={handleLanguageChange}
        className={styles["language-selector-select"]}
        style={{ minWidth: 100 }}
      />
    </div>
  );
};

export default LanguageSelector;
