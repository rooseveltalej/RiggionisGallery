import { useState, useCallback } from 'react';

interface UseImageCarouselProps {
  images: string[];
  initialIndex?: number;
}

/**
 * Hook for handling image carousel logic
 * Includes: navigation with buttons and touch gestures (swipe)
 */
export const useImageCarousel = ({images, initialIndex = 0}: UseImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum distance to consider a swipe (in pixels)
  const minSwipeDistance = 50;

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
      const newIndex = Math.min(images.length - 1, prev + 1);
      return newIndex;
    });
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

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
      return;
    }
    
    const distance = touchStart - touchEnd;
    const absoluteDistance = Math.abs(distance);
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Only consider as swipe if the distance is significant
    if (absoluteDistance > minSwipeDistance) {
      if (isLeftSwipe && currentImageIndex < images.length - 1) {
        // Swipe left: next image
        setCurrentImageIndex(prev => prev + 1);
      }
      
      if (isRightSwipe && currentImageIndex > 0) {
        // Swipe right: previous image
        setCurrentImageIndex(prev => prev - 1);
      }
    }

    // Reset
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, currentImageIndex, images.length, minSwipeDistance]);

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentImageIndex];

  return {
    // States
    currentImageIndex,
    isFirstImage,
    isLastImage,
    hasMultipleImages,
    currentImage,
    
    // Navigation handlers
    handlePrevImage,
    handleNextImage,
    goToImage,

    // Touch gesture handlers
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
