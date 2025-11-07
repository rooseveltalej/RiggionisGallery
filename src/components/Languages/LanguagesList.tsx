import React from "react";
import { Paragraph } from "@/mini-components";
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
        <section
            className={`languages-list ${className}`}
            aria-labelledby="languages-title"
        >
            <span
                id="languages-title"
                className={`languages-title ${titleClassName}`}
                title={title}
                aria-label={`Lista de ${title.toLowerCase()}`}
            >
                {title}
            </span>

            <ul className="lang-list" aria-label={`Idiomas disponibles`}>
                {languages.map((lang) => (
                    <li key={lang} title={`Idioma: ${lang}`}>
                        <Paragraph aria-label={`Idioma ${lang}`}>
                            {lang}
                        </Paragraph>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LanguagesList;
