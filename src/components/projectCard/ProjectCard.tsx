import React from 'react';
import Image from '@/mini-components/Image/Image';
import Button from '@/mini-components/Button/Button';
import { H3 } from '@/mini-components/h3/H3';
import { useProjectCard } from '@/hooks/useProjectCard';
import { getImageAltText, getAriaLabels } from '@/utils/projectFormatters';
import { ActionButtons } from '@/components/projectCard/ActionButtons';
import type { ProjectCardProps } from '@/components/projectCard/ProjectCard.interface';
import './ProjectCard.css';

const ProjectCard: React.FC<ProjectCardProps> = ({project,onViewProject,onBuyProject,onWhatsApp,className}) => {
  // Hook 
  const {isFavorite,handleToggleFavorite,favoriteIconSrc,showOverlay,handleTouchEnd} = useProjectCard({ project });
  // Utils
  const ariaLabels = getAriaLabels(project);
  // Obtener primera imagen con fallback
  const firstImage = project.images?.[0] || '/icons/fallback.png';
  
  return (
    <div
      className={`project-card ${className || ''}`.trim()}
      tabIndex={0}
      role="article"
      aria-label={ariaLabels.projectCard}
    >
      <div 
        className="project-card__image-container"
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={firstImage}
          alt={getImageAltText(project, 0)}
          className="project-card__image"
        />
        {/* Overlay con botones de acción */}
        <div className={`project-card__overlay ${showOverlay ? 'project-card__overlay--visible' : ''}`}>
          <div className="project-card__overlay-content">
            <ActionButtons
              project={project}
              onViewProject={onViewProject}
              onBuyProject={onBuyProject}
              onWhatsApp={onWhatsApp}
              ariaLabels={{
                viewProject: ariaLabels.viewProject,
                buyProject: ariaLabels.buyProject,
                whatsApp: ariaLabels.whatsApp,
              }}
            />
          </div>
        </div>
          {/* Chips de información - solo visible en hover o cuando showOverlay está activo */}
        <div className={`project-card__info-chips ${showOverlay ? 'project-card__info-chips--visible' : ''}`}>
          {project.metadata?.technique && (
            <span className="project-card__chip">{project.metadata.technique} </span>
          )}
          {project.metadata?.support && (
            <span className="project-card__chip">{project.metadata.support} </span>
          )}
          {project.metadata?.style && (
            <span className="project-card__chip">{project.metadata.style} </span>
          )}
        </div>
      </div>
      {/* Título fuera del contenedor de imagen */}
      <div className="project-card__title-container">
        <H3 className="project-card__title">{project.title}</H3>
        {/* Ícono de favorito junto al título */}
        <Button 
          key={`favorite-${isFavorite}`}
          text=""
          className={`project-card__favorite-btn ${isFavorite ? 'active' : ''}`} 
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? ariaLabels.removeFavorite : ariaLabels.addFavorite}
          icon={favoriteIconSrc}
        />
      </div>
    </div>
  );
};
export default ProjectCard;