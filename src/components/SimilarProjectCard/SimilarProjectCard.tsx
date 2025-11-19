import React from 'react';
import Image from '@/mini-components/Image/Image';
import { H3 } from '@/mini-components/h3/H3';
import type { SimilarProjectCardProps } from './SimilarProjectCard.interface';
import './SimilarProjectCard.css';

type MetadataKey = 'technique' | 'support' | 'style';

const METADATA_KEYS: MetadataKey[] = ['technique', 'support', 'style'];

const SimilarProjectCard: React.FC<SimilarProjectCardProps> = ({ 
  project, 
  className = '',
  onViewProject
}) => {
  const firstImage = project.images?.[0] || '/icons/fallback.png';

  const handleClick = () => {
    if (onViewProject) {
      onViewProject(project.id);
    }
  };

  return (
    <button 
      className={`similar-project-card ${className}`.trim()}
      onClick={handleClick}
      aria-label={`Ver proyecto ${project.title}`}
      type="button"
    >
      <div className="similar-project-card__image-wrapper">
        <Image
          src={firstImage}
          alt={project.title}
          className="similar-project-card__image"
        />
        
        <div className="similar-project-card__chips">
          {METADATA_KEYS.map((key) => {
            const value = project.metadata?.[key];
            return value ? (
              <H3 key={key} className="similar-project-card__chip">
                {value}
              </H3>
            ) : null;
          })}
        </div>
      </div>
      
      <H3 className="similar-project-card__title">{project.title}</H3>
    </button>
  );
};

export default SimilarProjectCard;
