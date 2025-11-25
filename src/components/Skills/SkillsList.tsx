import React from "react";
import { H2 } from "@/mini-components";
import type { SkillsListProps } from "./SkillsList.interface";
import "./SkillsList.css";

const SkillsList: React.FC<SkillsListProps> = ({
  title = "Habilidades y Herramientas",
  groups,
  className = "",
  titleClassName = "",
}) => {
  if (!groups || groups.length === 0) return null;

  return (
    <section
      className={`skills-list ${className}`}
      aria-labelledby="skills-title"
    >
      <H2
        id="skills-title"
        className={`skills-title ${titleClassName}`}
        aria-label={title}
      >
        {title}
      </H2>

      {groups.map((row, i) => (
        <ul
          key={`group-${i}`}
          className="skills-row"
          aria-label={`Grupo ${i + 1}`}
        >
          {row.map((skill) => (
            <li key={skill}>
              <span className="skill-item" aria-label={`Habilidad: ${skill}`}>
                {skill}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
};

export default SkillsList;
