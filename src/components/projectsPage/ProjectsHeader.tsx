import React from 'react';
import { H1 } from '@/mini-components/h1/H1';
import Button from '@/mini-components/Button/Button';

interface ProjectsHeaderProps {
  onBackClick: () => void;
}

export const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ onBackClick }) => {
  return (
    <div className="projects-page__header">
      <Button 
        text="← Volver"
        onClick={onBackClick}
        className="projects-page__back-btn"
      />
      <H1 className="projects-page__title">Todos los Proyectos</H1>
    </div>
  );
};
