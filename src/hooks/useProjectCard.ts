import { useState, useEffect, useCallback } from 'react';
import type { Project } from '@/components/projectCard/ProjectCard.interface';

interface UseProjectCardProps {
  project: Project;
  initialFavorite?: boolean;
  onToggleFavorite?: (project: Project) => void;
}

/**
 * Hook for handling ProjectCard logic
 * Includes: favorite state and mobile overlay toggle
 */
export const useProjectCard = ({project,initialFavorite = false,onToggleFavorite,}: UseProjectCardProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [showOverlay, setShowOverlay] = useState(false); // State to show overlay on mobile devices

  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  const handleToggleFavorite = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFavorite(prev => !prev);
    onToggleFavorite?.(project);
  }, [onToggleFavorite, project]);

  // Touch handler para toggle overlay en móviles (tap simple)
  const handleTouchEnd = useCallback(() => {
    setShowOverlay(prev => !prev);
  }, []);

  const favoriteIconSrc = isFavorite ? "/icons/favorite-filled.svg" : "/icons/favorite.svg";

  return {
    // States
    isFavorite,
    favoriteIconSrc,
    showOverlay,
    
    // Handlers
    handleToggleFavorite,
    handleTouchEnd,
  };
};
