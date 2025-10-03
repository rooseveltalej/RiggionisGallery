// Interfaces y tipos para ProjectCard
export type DimensionUnit = "cm" | "in" | "m";

export interface ProjectDimensions {
  width: number;
  height: number;
  unit: DimensionUnit;   
}
export interface Project {
  id: string;
  title: string;
  description?: string;
  images: string[]; // Array de URLs de imágenes para el carrusel
  metadata?:{
      technique?: string;
      support?: string;
      style?: string; // Estilo artístico
      dimensions?: ProjectDimensions;
  };
  year?: number;
  availability?: string;  // Agotado, Disponible, Vendido
  price?: {           
      amount: number;
      currency: "USD" |"CRC"| "EUR" 
  }; 
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
