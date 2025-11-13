import React, { useMemo } from 'react';
import { H2 } from '@/mini-components/h2/H2';
import { useLanguage } from '@/hooks';
import SimilarProjectCard from '../SimilarProjectCard/SimilarProjectCard';
import type { SimilarProjectsProps } from './SimilarProjects.interface';
import type { Project } from '../projectCard/ProjectCard.interface';
import './SimilarProjects.css';

const SimilarProjects: React.FC<SimilarProjectsProps> = ({ 
  projectId,
  className = ''
}) => {
  const { languageStrings } = useLanguage();

  const similarProjects = useMemo(() => {
    const projects = languageStrings?.gallery_page?.projects as Project[] | undefined;
    
    if (!projects || !Array.isArray(projects)) {
      return [];
    }

    const currentProject = projects.find(p => p.id === projectId);
    
    if (!currentProject || !currentProject.metadata) {
      return [];
    }

    const { technique, support, style } = currentProject.metadata;

    const similar = projects.filter(project => {
      if (project.id === projectId || !project.metadata) {
        return false;
      }

      let matches = 0;

      if (project.metadata.technique === technique) matches++;
      if (project.metadata.support === support) matches++;
      if (project.metadata.style === style) matches++;

      return matches >= 2;
    });

    return similar;
  }, [languageStrings, projectId]);

  const handleViewProject = (id: string) => {
    //TODO: Implementar navegación o acción al ver el proyecto
    console.log('View project:', id);
  };

  if (similarProjects.length === 0) {
    return null;
  }

  const relatedProjectsTitle = languageStrings?.general_titles?.related_projects || 'Proyectos relacionados';

  return (
    <section className={`similar-projects ${className}`.trim()}>
      <H2 className="similar-projects__title">{relatedProjectsTitle}</H2>
      
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

export default React.memo(SimilarProjects);
