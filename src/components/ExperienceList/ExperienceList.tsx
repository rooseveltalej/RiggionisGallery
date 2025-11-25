import React from "react";
import { H2, H3 } from "@/mini-components";
import type { ExperienceListProps } from "./ExperienceList.interface";
import "./ExperienceList.css";

const ExperienceList: React.FC<ExperienceListProps> = ({
  title = "Experiencia",
  items = [],
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="section-experience" aria-labelledby="experience-title">
      <H2 id="experience-title" className="exp-title">
        {title}
      </H2>
      <div className="exp-list">
        {items.map((ex) => (
          <article key={ex.heading} className="exp-item">
            <H3 className="exp-heading">
              {ex.heading}{" "}
              {ex.years && (
                <span className="exp-years" aria-label={`Duración ${ex.years}`}>
                  ({ex.years})
                </span>
              )}
              :
            </H3>
            {ex.description && (
              <span
                className="exp-desc"
                aria-label={`Descripción de ${ex.heading}`}
              >
                {ex.description}
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
