import React, { useEffect, useState } from 'react';
import Image from '@/mini-components/Image/Image';
import Arrows from '@/mini-components/Arrows/Arrows';
import Button from '@/mini-components/Button/Button';
import { H3 } from '@/mini-components/h3/H3';
import type { ProjectCardProps } from './ProjectCard.interface';
import './ProjectCard.css';


const ProjectCard: React.FC<ProjectCardProps> = ({project, onViewProject, onBuyProject, onWhatsApp, onToggleFavorite, isFavorite: initialFavorite = false, className}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  
  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

    // Llamar la función externa
  const handleViewProject = () => {
    if (onViewProject) {
      onViewProject(project);
    }
  };

  const handleBuyProject = () => {
    if (onBuyProject) {
      onBuyProject(project);
    }
  };

  const handleWhatsApp = () => {
    if (onWhatsApp) {
      onWhatsApp(project);
    }
  };

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Cambiar el estado local
    setIsFavorite(prevFavorite => !prevFavorite);
    
    if (onToggleFavorite) {
      onToggleFavorite(project);
    }
  };

  const handlePrevImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentImageIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentImageIndex(prev => Math.min(project.images.length - 1, prev + 1));
  };

  // Determinar el estado de la imagen actual
  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === project.images.length - 1;
  const hasMultipleImages = project.images.length > 1;
  // Fuente del ícono de favorito basado en el estado
  const favoriteIconSrc = isFavorite ? "/icons/favorite-filled.svg" : "/icons/favorite.svg";

  return (
    <div
      className={`project-card ${className || ''}`.trim()}
      tabIndex={0}
      aria-label={`Proyecto ${project.title}`}
    >
      <div className="project-card__image-container">
        <Image
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
          className="project-card__image"
        />
        
        {/* Arrows para navegación de imágenes */}
        {hasMultipleImages && (
          <>
            <div className="project-card__arrow project-card__arrow--left">
              <Arrows
                direction="left"
                onClick={handlePrevImage}
                disabled={isFirstImage}
                size="sm"
                color={isFirstImage ? "#ccc" : "#fff"}
              />
            </div>
            <div className="project-card__arrow project-card__arrow--right">
              <Arrows
                direction="right"
                onClick={handleNextImage}
                disabled={isLastImage}
                size="sm"
                color={isLastImage ? "#ccc" : "#fff"}
              />
            </div>
          </>
        )}
        
        {/* Indicadores de imagen */}
        {hasMultipleImages && (
          <div className="project-card__image-indicators">
            {project.images.map((_, index) => (
              <Button
                key={index}
                text="Desplazar Imagen"
                className={`project-card__indicator ${
                  index === currentImageIndex ? 'active' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-pressed={index === currentImageIndex}
              />
            ))}
          </div>
        )}
        
        {/* Overlay con botones de acción */}
        <div className="project-card__overlay">
          <div className="project-card__overlay-content">
            <div className="project-card__action-buttons">
              <Button
                text="Ver proyecto"
                onClick={handleViewProject}
                className="project-card__button project-card__button--view"
              />
              <Button
                text="Comprar"
                onClick={handleBuyProject}
                className="project-card__button project-card__button--buy"
              />
              <Button
                text="WhatsApp"
                icon={<span className="project-card__whatsapp-icon">📱</span>}
                onClick={handleWhatsApp}
                className="project-card__button project-card__button--whatsapp"
              />
            </div>
          </div>
        </div>

        {/* Chips de información - solo visible en hover */}
        <div className="project-card__info-chips">
          {project.metadata?.technique && (
            <H3 className="project-card__chip">{project.metadata.technique} </H3>
          )}
          {project.metadata?.support && (
            <H3 className="project-card__chip">{project.metadata.support} </H3>
          )}
          {project.metadata?.style && (
            <H3 className="project-card__chip">{project.metadata.style} </H3>
          )}
        </div>
      </div>

      {/* Título fuera del contenedor de imagen */}
      <div className="project-card__title-container">
        <H3 className="project-card__title">{project.title}</H3>
        
        {/* Ícono de favorito junto al título */}
        <button 
          type="button"
          className={`project-card__favorite-btn ${isFavorite ? 'active' : ''}`} 
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "Remover de favoritos" : "Agregar a favoritos"}
        >
          <Image
            key={isFavorite ? 'filled' : 'outline'}
            src={favoriteIconSrc}
            alt={isFavorite ? "Favorito marcado" : "Favorito no marcado"}
            className="project-card__favorite-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;