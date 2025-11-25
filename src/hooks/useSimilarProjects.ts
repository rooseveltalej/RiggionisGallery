import { useMemo, useCallback } from 'react';
import type { Project } from '@/components/projectCard/ProjectCard.interface';

interface UseSimilarProjectsProps {
  projectId: string;
  projects: Project[] | undefined;
}

interface UseSimilarProjectsReturn {
  similarProjects: Project[];
  handleViewProject: (id: string) => void;
}

const METADATA_KEYS = ['technique', 'support', 'style'] as const;
const MIN_MATCHES = 2;

export const useSimilarProjects = ({
  projectId,
  projects
}: UseSimilarProjectsProps): UseSimilarProjectsReturn => {
  
  const similarProjects = useMemo(() => {
    if (!projects || !Array.isArray(projects)) {
      return [];
    }

    const currentProject = projects.find(p => p.id === projectId);
    
    if (!currentProject?.metadata) {
      return [];
    }

    const currentMetadata = currentProject.metadata;

    const similar = projects.filter(project => {
      if (project.id === projectId || !project.metadata) {
        return false;
      }

      const matches = METADATA_KEYS.reduce((count, key) => {
        return currentMetadata[key] === project.metadata?.[key] 
          ? count + 1 
          : count;
      }, 0);

      return matches >= MIN_MATCHES;
    });

    return similar;
  }, [projects, projectId]);

  const handleViewProject = useCallback((id: string) => {
    window.location.href = `/project/${id}`;
  }, []);

  return {
    similarProjects,
    handleViewProject
  };
};
