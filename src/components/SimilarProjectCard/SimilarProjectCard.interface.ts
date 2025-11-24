import type { Project } from '../projectCard/ProjectCard.interface';

export interface SimilarProjectCardProps {
  project: Project;
  className?: string;
  onViewProject?: (projectId: string) => void;
}
