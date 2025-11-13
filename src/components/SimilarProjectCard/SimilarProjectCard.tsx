import React, { useState } from 'react';
import Image from '@/mini-components/Image/Image';
import { H3 } from '@/mini-components/h3/H3';
import type { SimilarProjectCardProps } from './SimilarProjectCard.interface';
import './SimilarProjectCard.css';

const SimilarProjectCard: React.FC<SimilarProjectCardProps> = ({ 
  project, 
  className = '',
  onViewProject
}) => {
  const [showChips, setShowChips] = useState(false);
  
  const firstImage = project.images?.[0] || '/icons/fallback.png';

  const handleClick = () => {
    if (onViewProject) {
      onViewProject(project.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={`similar-project-card ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setShowChips(true)}
      onMouseLeave={() => setShowChips(false)}
      tabIndex={0}
      role="button"
      aria-label={`Ver proyecto ${project.title}`}
    >
      <div className="similar-project-card__image-wrapper">
        <Image
          src={firstImage}
          alt={project.title}
          className="similar-project-card__image"
        />
        
        <div className={`similar-project-card__chips ${showChips ? 'similar-project-card__chips--visible' : ''}`}>
          {project.metadata?.technique && (
            <H3 className="similar-project-card__chip">{project.metadata.technique}</H3>
          )}
          {project.metadata?.support && (
            <H3 className="similar-project-card__chip">{project.metadata.support}</H3>
          )}
          {project.metadata?.style && (
            <H3 className="similar-project-card__chip">{project.metadata.style}</H3>
          )}
        </div>
      </div>
      
      <H3 className="similar-project-card__title">{project.title}</H3>
    </div>
  );
};

export default React.memo(SimilarProjectCard);
