import React from "react";
import { H2, H3, Paragraph } from "@/mini-components";
import type { ExperienceListProps } from "./ExperienceList.interface";
import "./ExperienceList.css";

const ExperienceList: React.FC<ExperienceListProps> = ({
  title = "Experiencia",
  items = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="section-experience">
      <H2 className="exp-title">{title}</H2>
      <div className="exp-list">
        {items.map((ex, idx) => (
          <article key={idx} className="exp-item">
            <H3 className="exp-heading">
              {ex.heading} {ex.years ? <span className="exp-years">({ex.years})</span> : null} :
            </H3>
            {ex.description && <Paragraph className="exp-desc">{ex.description}</Paragraph>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
