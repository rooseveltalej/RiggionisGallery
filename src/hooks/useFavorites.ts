import { useState, useEffect, useCallback, useMemo } from "react";
import {
  incrementProjectFavorites,
  decrementProjectFavorites,
} from "@/firebase/firestore";
/**
 * Hook to manage favorites using localStorage
 * Persists favorites across browser sessions
 * Supports cross-tab synchronization via storage events
 */

const FAVORITES_KEY = "riggionis-gallery-favorites";
export const useFavorites = () => {
  const [favoritesArray, setFavoritesArray] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const favorites = useMemo(() => new Set(favoritesArray), [favoritesArray]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        const parsed = JSON.parse(storedFavorites);
        setFavoritesArray(Array.isArray(parsed) ? parsed : []);
      }
      setIsLoaded(true);
    } catch (error) {
      console.error("Error loading favorites from localStorage:", error);
      setIsLoaded(true);
    }
  }, []);
  // Listen for storage changes from other tabs/windows
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === FAVORITES_KEY && event.newValue) {
        try {
          const parsed = JSON.parse(event.newValue);
          setFavoritesArray(Array.isArray(parsed) ? parsed : []);
        } catch (error) {
          console.error("Error parsing storage event:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Save favorites to localStorage whenever they change
  const saveFavorites = useCallback((newFavoritesArray: string[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavoritesArray));
    } catch (error) {
      console.error("Error saving favorites to localStorage:", error);
    }
  }, []);

  // Toggle favorite status for a project
  const toggleFavorite = useCallback(
    async (projectId: string, projectName: string) => {
      const wasFavorite = favorites.has(projectId);

      // Update local state
      setFavoritesArray((prev) => {
        const newArray = wasFavorite
          ? prev.filter((id) => id !== projectId)
          : [...prev, projectId];
        saveFavorites(newArray);
        return newArray;
      });

      // Update Firebase counter in background
      try {
        if (wasFavorite) {
          await decrementProjectFavorites(projectId, projectName);
        } else {
          await incrementProjectFavorites(projectId, projectName);
        }
      } catch (error) {
        console.error("Error updating Firebase favorites count:", error);
        // Revert local state if Firebase update fails
        setFavoritesArray((prev) => {
          const revertedArray = wasFavorite
            ? [...prev, projectId]
            : prev.filter((id) => id !== projectId);
          saveFavorites(revertedArray);
          return revertedArray;
        });
      }
    },
    [favorites, saveFavorites],
  );

  // Add a project to favorites
  const addFavorite = useCallback(
    async (projectId: string, projectName: string) => {
      setFavoritesArray((prev) => {
        if (prev.includes(projectId)) return prev;
        const newArray = [...prev, projectId];
        saveFavorites(newArray);
        return newArray;
      });

      try {
        await incrementProjectFavorites(projectId, projectName);
      } catch (error) {
        console.error("Error adding favorite to Firebase:", error);
      }
    },
    [saveFavorites],
  );

  // Remove a project from favorites
  const removeFavorite = useCallback(
    async (projectId: string, projectName: string) => {
      setFavoritesArray((prev) => {
        const newArray = prev.filter((id) => id !== projectId);
        saveFavorites(newArray);
        return newArray;
      });

      try {
        await decrementProjectFavorites(projectId, projectName);
      } catch (error) {
        console.error("Error removing favorite from Firebase:", error);
      }
    },
    [saveFavorites],
  );

  // Check if a project is favorited
  const isFavorite = useCallback(
    (projectId: string): boolean => {
      return favorites.has(projectId);
    },
    [favorites],
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
