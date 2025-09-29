// Interfaces y tipos para ProjectCard
export interface ProjectDimensions {
  width: number;
  height: number;
  unit: string;   
}
export interface Project {
  id: string;
  title: string;
  description?: string;
  images: string[]; // Array de URLs de imágenes para el carrusel
  technique?: string;
  support?: string;
  style?: string; // Estilo artístico
  year?: number;
  dimensions?: ProjectDimensions;
}

export interface ProjectCardProps {
  project: Project;
  onViewProject?: (project: Project) => void;
  onBuyProject?: (project: Project) => void;
  onWhatsApp?: (project: Project) => void;
  onToggleFavorite?: (project: Project) => void;
  isFavorite?: boolean;
  className?: string;
}