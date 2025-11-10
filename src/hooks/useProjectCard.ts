import { useState, useCallback } from 'react';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import type { Project } from '@/components/projectCard/ProjectCard.interface';

interface UseProjectCardProps {
  project: Project;
  onToggleFavorite?: (project: Project) => void;
}

/**
 * Hook for handling ProjectCard logic
 * Includes: favorite state (synced with localStorage) and mobile overlay toggle
 */
export const useProjectCard = ({project,onToggleFavorite,}: UseProjectCardProps) => {
  const { isFavorite: checkIsFavorite, toggleFavorite } = useFavoritesContext();
  const [showOverlay, setShowOverlay] = useState(false); // State to show overlay on mobile devices

  // Get favorite state from context (localStorage)
  const isFavorite = checkIsFavorite(project.id);

  const handleToggleFavorite = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    toggleFavorite(project.id);
    onToggleFavorite?.(project);
  }, [toggleFavorite, project, onToggleFavorite]);

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
