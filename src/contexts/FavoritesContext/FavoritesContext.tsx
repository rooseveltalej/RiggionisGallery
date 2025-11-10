import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useFavorites } from '@/hooks/useFavorites';

interface FavoritesContextValue {
  favorites: Set<string>;
  isLoaded: boolean;
  toggleFavorite: (projectId: string) => void;
  addFavorite: (projectId: string) => void;
  removeFavorite: (projectId: string) => void;
  isFavorite: (projectId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

/**
 * Provider for Favorites Context
 * Manages favorites state across the application using localStorage
 */
export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const favoritesData = useFavorites();

  return (
    <FavoritesContext.Provider value={favoritesData}>
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Hook to access Favorites Context
 * Must be used within FavoritesProvider
 */
export const useFavoritesContext = (): FavoritesContextValue => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext must be used within FavoritesProvider');
  }
  return context;
};
