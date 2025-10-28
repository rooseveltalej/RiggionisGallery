import React from 'react';
import { H1 } from '@/mini-components/h1/H1';
import Button from '@/mini-components/Button/Button';
import { useLanguage } from '@/hooks/useLanguage';

interface ProjectsHeaderProps {
  onBackClick: () => void;
}

export const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ onBackClick }) => {
  const { languageStrings } = useLanguage();
  
  const title = languageStrings?.gallery_page?.title;
  const backButtonText = languageStrings?.general_titles?.buttons?.back;

  return (
    <div className="projects-page__header">
      <Button 
        text={backButtonText}
        onClick={onBackClick}
        className="projects-page__back-btn"
      />
      <H1 className="projects-page__title">{title}</H1>
    </div>
  );
};
