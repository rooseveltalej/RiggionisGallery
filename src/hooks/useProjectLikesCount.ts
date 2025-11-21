import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { getProjectFavoritesCount } from '@/firebase/firestore';

/**
 * Hook to fetch and display the global favorites count from Firebase
 * Uses real-time listener (onSnapshot) to update automatically when any user likes/unlikes
 * @param projectId - The ID of the project
 * @param projectName - The name of the project (for creating document if needed)
 * @returns Object with likesCount, loading state, and refresh function
 */
export const useProjectLikesCount = (projectId: string, projectName?: string) => {
  const [likesCount, setLikesCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const setupRealtimeListener = async () => {
      try {
        // First, ensure document exists
        const initialCount = await getProjectFavoritesCount(projectId, projectName);
        setLikesCount(initialCount);
        setLoading(false);

        // Setup real-time listener
        const projectRef = doc(db, "favorite projects", projectId);
        unsubscribe = onSnapshot(
          projectRef,
          (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              const newCount = data.likeCount || 0;
              setLikesCount(newCount);
              setLoading(false);
            } else {
              setLikesCount(0);
              setLoading(false);
            }
          },
          (err) => {
            console.error('Error in real-time listener:', err);
            setError('Failed to load likes count');
            setLoading(false);
          }
        );
      } catch (err) {
        console.error('Error setting up listener:', err);
        setError('Failed to load likes count');
        setLoading(false);
      }
    };
    if (projectId) {
      setupRealtimeListener();
    }
    //unsubscribe from listener when component unmounts
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [projectId]);

  return {
    likesCount,
    loading,
    error,
  };
};