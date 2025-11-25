import { useState, useCallback, useMemo } from 'react';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { useProjectLikesCount } from '@/hooks/useProjectLikesCount';
import { getAriaLabels } from '@/utils/projectFormatters';
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
  const { likesCount, loading: loadingLikes } = useProjectLikesCount(project.id, project.title); // Get likes count

  // Get favorite state from context (localStorage)
  const isFavorite= useMemo(
    () => checkIsFavorite(project.id),
    [checkIsFavorite, project.id]
  );
  // Get aria labels for accessibility
  const ariaLabels = useMemo(
    () => getAriaLabels(project),
    [project]
  );

 const handleToggleFavorite = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    // Update favorite state and Firebase
    toggleFavorite(project.id, project.title);
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
    likesCount,
    loadingLikes,
    ariaLabels,
    // Handlers
    handleToggleFavorite,
    handleTouchEnd,
  };
};
