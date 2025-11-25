import type { Project } from "@/components/projectCard/ProjectCard.interface";

export interface FilterState {
  technique: string;
  support: string;
  style: string;
  availability: string;
}

export interface FilterOptions {
  techniques: string[];
  supports: string[];
  styles: string[];
  availabilities: string[];
}

export interface ProjectsPageProps {
  projects: Project[];
  currentPage: number;
  filters: FilterState;
  filteredProjects: Project[];
  projectsPerPage: number;
  filterOptions: FilterOptions;
  onFilterChange: (filterType: keyof FilterState, value: string) => void;
  onPageChange: (page: number) => void;
  onNavigateBack: () => void;
}
