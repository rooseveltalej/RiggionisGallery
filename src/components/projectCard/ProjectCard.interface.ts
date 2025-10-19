// Interfaces y tipos para ProjectCard
//export type DimensionUnit = "cm" | "in" | "m";
export type AvailabilityStatus = "Disponible" | "Vendido" | "Agotado" ;
export type CurrencyCode = "USD" | "CRC" | "EUR";

export type WeightUnit = "kg" | "g" | "lb";
export type DimensionUnit = "cm" | "in" | "m";

export interface Weight {
  amount: number;
  unit: WeightUnit;
}
export interface Depth {
  amount: number;
  unit: DimensionUnit;
}

export interface ProjectDimensions {
  width: number;
  height: number;
  unit: DimensionUnit;   
}
export interface Price {
  amount: number;
  currency: CurrencyCode;
}
export interface Weight {
  amount: number;
  unit: WeightUnit;
}
export interface Depth {
  amount: number;
  unit: DimensionUnit;
}
export interface Project {
  id: string;
  title: string;
  description?: string;
  images: string[]; // Array de URLs de imágenes
  metadata?:{
      technique?: string;
      support?: string;
      style?: string; // Estilo artístico
      dimensions?: ProjectDimensions;
  };
  year?: number;
  availability?: AvailabilityStatus; 
  price?: Price; 
  weight?: Weight;
  depth?: Depth;
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
