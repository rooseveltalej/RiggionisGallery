import { useState, useEffect, useCallback } from 'react';
import { incrementProjectFavorites, decrementProjectFavorites } from '@/firebase/firestore';
/**
 * Hook to manage favorites using localStorage
 * Persists favorites across browser sessions
 */

const FAVORITES_KEY = 'riggionis-gallery-favorites';
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return; 
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        const parsed = JSON.parse(storedFavorites);
        setFavorites(new Set(parsed));
      }
      setIsLoaded(true);
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      setIsLoaded(true);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  const saveFavorites = useCallback((newFavorites: Set<string>) => {
    try {
      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(Array.from(newFavorites))
      );
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, []);

  // Toggle favorite status for a project
  const toggleFavorite = useCallback(
    async (projectId: string, projectName: string) => {
      const wasFavorite = favorites.has(projectId);
      
      // Update local state
      setFavorites((prev) => {
        const newFavorites = new Set(prev);
        if (newFavorites.has(projectId)) {
          newFavorites.delete(projectId);
        } else {
          newFavorites.add(projectId);
        }
        saveFavorites(newFavorites);
        return newFavorites;
      });

      // Update Firebase counter in background
      try {
        if (wasFavorite) {
          await decrementProjectFavorites(projectId);
        } else {
          await incrementProjectFavorites(projectId, projectName);
        }
      } catch (error) {
        console.error('Error updating Firebase favorites count:', error);
        // Revert local state if Firebase update fails
        setFavorites((prev) => {
          const revertedFavorites = new Set(prev);
          if (wasFavorite) {
            revertedFavorites.add(projectId);
          } else {
            revertedFavorites.delete(projectId);
          }
          saveFavorites(revertedFavorites);
          return revertedFavorites;
        });
      }
    },
    [favorites, saveFavorites]
  );

  // Add a project to favorites
  const addFavorite = useCallback(
    async (projectId: string, projectName: string) => {
      setFavorites((prev) => {
        const newFavorites = new Set(prev);
        newFavorites.add(projectId);
        saveFavorites(newFavorites);
        return newFavorites;
      });

      try {
        await incrementProjectFavorites(projectId, projectName);
      } catch (error) {
        console.error('Error adding favorite to Firebase:', error);
      }
    },
    [saveFavorites]
  );

  // Remove a project from favorites
  const removeFavorite = useCallback(
    async (projectId: string) => {
      setFavorites((prev) => {
        const newFavorites = new Set(prev);
        newFavorites.delete(projectId);
        saveFavorites(newFavorites);
        return newFavorites;
      });

      try {
        await decrementProjectFavorites(projectId);
      } catch (error) {
        console.error('Error removing favorite from Firebase:', error);
      }
    },
    [saveFavorites]
  );

  // Check if a project is favorited
  const isFavorite = useCallback(
    (projectId: string): boolean => {
      return favorites.has(projectId);
    },
    [favorites]
  );

  return {
    // State
    favorites,
    isLoaded,

    // Methods
    toggleFavorite,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
