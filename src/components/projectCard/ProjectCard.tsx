import React from 'react';
import Image from '@/mini-components/Image/Image';
import Button from '@/mini-components/Button/Button';
import { H3 } from '@/mini-components/h3/H3';
import { useProjectCard } from '@/hooks/useProjectCard';
import { useProjectLikesCount } from '@/hooks/useProjectLikesCount';
import { getImageAltText, getAriaLabels } from '@/utils/projectFormatters';
import { ActionButtons } from '@/components/projectCard/ActionButtons';
import type { ProjectCardProps } from '@/components/projectCard/ProjectCard.interface';
import './ProjectCard.css';

const ProjectCard: React.FC<ProjectCardProps> = ({project,onViewProject,onBuyProject,onWhatsApp,className}) => {
  // Hook for likes count
  const { likesCount, loading: loadingLikes } = useProjectLikesCount(project.id, project.title);
  // Hook 
  const {isFavorite,handleToggleFavorite,favoriteIconSrc,showOverlay,handleTouchEnd} = useProjectCard({ project });
  // Utils
  const ariaLabels = getAriaLabels(project);
  // Obtener primera imagen con fallback
  const firstImage = project.images?.[0] || '/icons/fallback.png';
  
  return (
    <article
      className={`project-card ${className || ''}`.trim()}
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
        <div className="project-card__overlay" data-mobile-visible={showOverlay}>
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
        <div className="project-card__info-chips" data-mobile-visible={showOverlay}>
          {project.metadata && Object.entries(project.metadata)
            .filter(([key, value]) => value && typeof value === 'string' && key !== 'dimensions')
            .map(([key, value]) => (
              <span key={key} className="project-card__chip">
                {value as string}
              </span>
            ))
          }
        </div>
      </div>
 {/* Título fuera del contenedor de imagen */}
      <div className="project-card__title-container">
        <H3 className="project-card__title">{project.title}</H3>
        <div className="project-card__favorite-section">
          {/* Contador de likes */}
          {!loadingLikes && (
            <span className="project-card__likes-count" aria-label={`${likesCount} likes`}>
              {likesCount}
            </span>
          )} 
          {/* Indicador de carga mientras se obtienen los likes */}
          {loadingLikes && (
            <span className="project-card__likes-count project-card__likes-count--loading">
              ...
            </span>
          )}
          {/* Ícono de favorito junto al título */}
        <Button 
          text=""
          className={`project-card__favorite-btn ${isFavorite ? 'active' : ''}`} 
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? ariaLabels.removeFavorite : ariaLabels.addFavorite}
          icon={favoriteIconSrc}
        />
      </div>
    </div>
    </article>
  );
};
export default ProjectCard;