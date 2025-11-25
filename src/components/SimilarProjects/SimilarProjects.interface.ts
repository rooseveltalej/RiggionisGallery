import type { Project } from "../projectCard/ProjectCard.interface";

export interface SimilarProjectsProps {
  projectId: string;
  projects: Project[];
  title: string;
  className?: string;
}
