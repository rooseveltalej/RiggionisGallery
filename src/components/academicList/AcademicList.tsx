import React from "react";
import { H2, H3, Paragraph } from "@/mini-components";
import type { AcademicListProps } from "./AcademicList.interface";
import "./AcademicList.css";

const AcademicList: React.FC<AcademicListProps> = ({
  title = "Preparación académica",
  items = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="section-academic">
      <H2 className="academic-title">{title}</H2>
      <div className="academic-list">
        {items.map((it, idx) => (
          <div key={idx} className="academic-item">
            <H3>{it.title}</H3>
            {it.institution && <Paragraph color="var(--color-muted)">{it.institution}</Paragraph>}
            {it.year && <Paragraph color="var(--color-muted)">{it.year}</Paragraph>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicList;
