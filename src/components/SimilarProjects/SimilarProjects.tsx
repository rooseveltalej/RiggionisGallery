import React from "react";
import { H2 } from "@/mini-components/h2/H2";
import { useSimilarProjects, useHorizontalScroll } from "@/hooks";
import SimilarProjectCard from "../SimilarProjectCard/SimilarProjectCard";
import type { SimilarProjectsProps } from "./SimilarProjects.interface";
import "./SimilarProjects.css";

const SimilarProjects: React.FC<SimilarProjectsProps> = ({
  projectId,
  projects,
  title,
  className = "",
}) => {
  const scrollRef = useHorizontalScroll<HTMLUListElement>();
  const { similarProjects, handleViewProject } = useSimilarProjects({
    projectId,
    projects,
  });

  if (similarProjects.length === 0) {
    return null;
  }

  return (
    <section className={`similar-projects ${className}`.trim()}>
      <H2 className="similar-projects__title">{title}</H2>

      <ul ref={scrollRef} role="list" className="similar-projects__grid">
        {similarProjects.map((project) => (
          <li key={project.id}>
            <SimilarProjectCard
              project={project}
              onViewProject={handleViewProject}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SimilarProjects;
