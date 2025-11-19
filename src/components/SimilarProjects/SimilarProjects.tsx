import React from 'react';
import { H2 } from '@/mini-components/h2/H2';
import { useSimilarProjects } from '@/hooks';
import SimilarProjectCard from '../SimilarProjectCard/SimilarProjectCard';
import type { SimilarProjectsProps } from './SimilarProjects.interface';
import './SimilarProjects.css';

const SimilarProjects: React.FC<SimilarProjectsProps> = ({ 
  projectId,
  projects,
  title,
  className = ''
}) => {
  const { similarProjects, handleViewProject } = useSimilarProjects({
    projectId,
    projects
  });

  if (similarProjects.length === 0) {
    return null;
  }

  return (
    <section className={`similar-projects ${className}`.trim()}>
      <H2 className="similar-projects__title">{title}</H2>
      
      <div className="similar-projects__grid">
        {similarProjects.map(project => (
          <SimilarProjectCard
            key={project.id}
            project={project}
            onViewProject={handleViewProject}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarProjects;
