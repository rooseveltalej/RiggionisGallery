import { useLanguage } from './useLanguage';
import { openProjectWhatsApp } from '@/utils/projectFormatters';
import type { Project } from '@/components/projectCard/ProjectCard.interface';

export const useProjectActions = () => {
  const { languageStrings } = useLanguage();

  const handleViewProject = (project: Project) => {
    console.log('Ver proyecto:', project);
    // TODO: Navegar a página de detalles
  };

  const handleBuyProject = (project: Project) => {
    const phoneNumber = languageStrings?.general_titles?.artist_info?.values?.phone?.replace(/[^\d]/g, '') || '5060000000';
    openProjectWhatsApp(project, phoneNumber);
  };

  const handleWhatsApp = (project: Project) => {
    const phoneNumber = languageStrings?.general_titles?.artist_info?.values?.phone?.replace(/[^\d]/g, '') || '5060000000';
    openProjectWhatsApp(project, phoneNumber);
  };

  const handleToggleFavorite = (project: Project) => {
    console.log('Toggle favorito:', project);
    // TODO: Manejar favoritos
  };

  return {
    handleViewProject,
    handleBuyProject,
    handleWhatsApp,
    handleToggleFavorite,
  };
};
