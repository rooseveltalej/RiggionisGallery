import React from 'react';
import Button from '@/mini-components/Button/Button';
import type { ImageIndicatorsProps } from  '@/components/projectCard/ActionCard.interface';

export const ImageIndicators: React.FC<ImageIndicatorsProps> = ({totalImages,currentIndex,onSelect,}) => {
  return (
    <div className="project-card__image-indicators">
      {Array.from({ length: totalImages }, (_, index) => (
        <Button
          key={index}
          text=""
          className={`project-card__indicator ${
            index === currentIndex ? 'active' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(index);
          }}
          aria-label={`Ir a la imagen ${index + 1}`}
          aria-pressed={index === currentIndex}
        />
      ))}
    </div>
  );
};