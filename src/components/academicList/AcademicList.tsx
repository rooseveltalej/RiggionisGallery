import React from "react";
import { H2, H3 } from "@/mini-components";
import type { AcademicListProps } from "./AcademicList.interface";
import "./AcademicList.css";

const AcademicList: React.FC<AcademicListProps> = ({
  title = "Preparación académica",
  items = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="section-academic" aria-labelledby="academic-title">
      <H2 id="academic-title" className="academic-title">
        {title}
      </H2>
      <ul className="academic-list">
        {items.map((it) => (
          <li key={it.title} className="academic-item">
            <H3>{it.title}</H3>

            {it.institution && (
              <span
                className="academic-institution"
                style={{ color: "var(--color-muted)" }}
                aria-label={`Institución: ${it.institution}`}
              >
                {it.institution}
              </span>
            )}

            {it.year && (
              <span
                className="academic-year"
                style={{ color: "var(--color-muted)" }}
                aria-label={`Año: ${it.year}`}
              >
                {it.year}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AcademicList;
