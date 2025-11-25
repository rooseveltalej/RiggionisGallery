import type { Project } from "@/components/projectCard/ProjectCard.interface";

export interface ActionButtonsProps {
  project: Project;
  onViewProject?: (project: Project) => void;
  onBuyProject?: (project: Project) => void;
  onWhatsApp?: (project: Project) => void;
  ariaLabels: {
    viewProject: string;
    buyProject: string;
    whatsApp: string;
  };
  viewProjectText?: string;
  whatsappText?: string;
}
export interface ImageIndicatorsProps {
  totalImages: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}
export interface ImageNavigationProps {
  onPrevious: (event: React.MouseEvent) => void;
  onNext: (event: React.MouseEvent) => void;
  isFirstImage: boolean;
  isLastImage: boolean;
}
