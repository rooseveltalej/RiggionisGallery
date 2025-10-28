import React from "react";
import { H2, Paragraph } from "@/mini-components";
import type { LanguagesListProps } from "./LanguagesList.interface";
import "./LanguagesList.css";

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
            <Paragraph>{lang}</Paragraph>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;
