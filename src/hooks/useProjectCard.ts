import { useState, useEffect, useCallback } from 'react';
import type { Project } from '@/components/projectCard/ProjectCard.interface';

interface UseProjectCardProps {
  project: Project;
  initialFavorite?: boolean;
  onToggleFavorite?: (project: Project) => void;
}

export const useProjectCard = ({project,initialFavorite = false,onToggleFavorite,}: UseProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false); // Status to display overlay on mobile devices

  // Minimum distance to consider a swipe (in pixels)
  const minSwipeDistance = 10;

  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  // Image navigation
  const handlePrevImage = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentImageIndex(prev => {
      const newIndex = Math.max(0, prev - 1);
      return newIndex;
    });
  }, []);

  const handleNextImage = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentImageIndex(prev => {
      const newIndex = Math.min(project.images.length - 1, prev + 1);
      return newIndex;
    });
  }, [project.images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const handleToggleFavorite = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFavorite(prev => !prev);
    onToggleFavorite?.(project);
  }, [onToggleFavorite, project]);

  // Touch gesture management
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) {
      // if have no movement (touchEnd not set), it's a TAP
      if (touchStart && !touchEnd) {
        setShowOverlay(prev => {
          return !prev;
        });
      }
      return;
    }
    
    const distance = touchStart - touchEnd;
    const absoluteDistance = Math.abs(distance);
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Swipe if distance significant
    if (absoluteDistance > minSwipeDistance) {
      if (isLeftSwipe && currentImageIndex < project.images.length - 1) {
        // Swipe left: next image
        setCurrentImageIndex(prev => prev + 1);
      }
      
      if (isRightSwipe && currentImageIndex > 0) {
        // Swipe right: previous image
        setCurrentImageIndex(prev => prev - 1);
      }
    } else {
      // Small movement, consider as TAP
      setShowOverlay(prev => {
        return !prev;
      });
    }

    // Reset
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, currentImageIndex, project.images.length, minSwipeDistance]);

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === project.images.length - 1;
  const hasMultipleImages = project.images.length > 1;
  const currentImage = project.images[currentImageIndex];
  const favoriteIconSrc = isFavorite  ? "/icons/favorite-filled.svg" : "/icons/favorite.svg";

  return {
    // states
    currentImageIndex,
    isFavorite,
    isFirstImage,
    isLastImage,
    hasMultipleImages,
    currentImage,
    favoriteIconSrc,
    showOverlay, // Status to display overlay on mobile devices
    
    // Handlers
    handlePrevImage,
    handleNextImage,
    goToImage,

    // Touch gesture management
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,

    // Favorite handler
    handleToggleFavorite,
  };
};
