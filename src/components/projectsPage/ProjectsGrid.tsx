import React from 'react';
import { ProjectCard } from '@/components';
import type { Project } from '@/components/projectCard/ProjectCard.interface';

interface ProjectsGridProps {
  projects: Project[];
  onViewProject: (project: Project) => void;
  onBuyProject: (project: Project) => void;
  onWhatsApp: (project: Project) => void;
  onToggleFavorite: (project: Project) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  onViewProject,
  onBuyProject,
  onWhatsApp,
  onToggleFavorite,
}) => {
  if (projects.length === 0) {
    return (
      <div className="projects-page__no-results">
        <p>No se encontraron proyectos con los filtros seleccionados.</p>
      </div>
    );
  }

  return (
    <div className="projects-page__grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onViewProject={onViewProject}
          onBuyProject={onBuyProject}
          onWhatsApp={onWhatsApp}
          onToggleFavorite={onToggleFavorite}
          isFavorite={false}
          className="projects-page__card"
        />
      ))}
    </div>
  );
};
