import React from "react";
import { H2, SkillTag } from "@/mini-components";
import "./LanguagesList.css";

export type LanguagesListProps = {
  title?: string;
  languages: string[];
  className?: string;
  titleClassName?: string;
};

const LanguagesList: React.FC<LanguagesListProps> = ({
  title = "Idiomas",
  languages,
  className = "",
  titleClassName = "",
}) => {
  if (!languages || languages.length === 0) return null;

  return (
    <div className={`languages-list ${className}`}>
      <H2 className={`languages-title ${titleClassName}`}>{title}</H2>
      <ul className="lang-list">
        {languages.map((lang, i) => (
          <li key={i}>
            <SkillTag text={lang} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
