import React from "react";
import { H2, Paragraph } from "@/mini-components";
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
    <div className={`skills-list ${className}`}>
      <H2 className={`skills-title ${titleClassName}`}>{title}</H2>
      {groups.map((row, i) => (
        <ul key={i} className="skills-row">
          {row.map((skill, j) => (
            <li key={j}>
              <Paragraph>{skill}</Paragraph>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default SkillsList;
