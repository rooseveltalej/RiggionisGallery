import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  increment,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./config.js";

/**o.
 * if document does not exist, create it with likeCount = 0
 * @param projectId - Unique project ID
 * @param projectName - Project name
 */
export const incrementProjectFavorites = async (projectId: string, projectName: string) => {
  try {
    const projectRef = doc(db, "favorite projects", projectId);
    const projectSnap = await getDoc(projectRef);

    if (projectSnap.exists()) {
      // if exists, just increment
      await updateDoc(projectRef, {
        likeCount: increment(1),
      });
    } else {
      // if does not exist, create it with 0 likes
      await setDoc(projectRef, {
        projectName,
        likeCount: 0,
      });
    }
  } catch (error) {
    console.error("Error incrementing favorites count:", error);
  }
};

/**
 * Decrement the favorites count for a project
 * Only decrements if count is greater than 0
 * @param projectId - The ID of the project
 * @param projectName - The name of the project
 * @returns Promise<void>
 */
export const decrementProjectFavorites = async (projectId: string, projectName: string) => {
  try {
    const projectRef = doc(db, "favorite projects", projectId);
    const projectSnap = await getDoc(projectRef);
    
    if (projectSnap.exists()) {
      const currentCount = projectSnap.data().likeCount || 0;
      
      // Only decrement if count is greater than 0
      if (currentCount > 0) {
        await updateDoc(projectRef, {
          likeCount: increment(-1)
        });
      }
    } else {
      // Document doesn't exist, create it with likeCount = 0
      await setDoc(projectRef, {
        projectName,
        likeCount: 0,
      });
    }
  } catch (error) {
    console.error("Error decrementing favorites count:", error);
  }
};

/**
 * Get the favorites count for a project
 * If the document doesn't exist, creates it with likeCount = 0
 * @param projectId - The ID of the project
 * @param projectName - The name of the project (optional, used only when creating)
 * @returns Promise<number> - The current favorites count
 */
export const getProjectFavoritesCount = async (projectId: string, projectName?: string) => {
  try {
    const projectRef = doc(db, "favorite projects", projectId);
    const projectSnap = await getDoc(projectRef);
    
    if (projectSnap.exists()) {
      const data = projectSnap.data();
      return data.likeCount || 0;
    } else {
      // Document doesn't exist, create it with likeCount = 0
      await setDoc(projectRef, {
        projectName: projectName || "Unknown Project",
        likeCount: 0,
      });
      return 0;
    }
  } catch (error) {
    console.error("Error getting favorites count:", error);
    return 0;
  }
};