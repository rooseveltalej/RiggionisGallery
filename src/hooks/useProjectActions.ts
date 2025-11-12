import { useNavigate } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import { openProjectWhatsApp } from "@/utils/projectFormatters";
import type { Project } from "@/components/projectCard/ProjectCard.interface";

export const useProjectActions = () => {
  const navigate = useNavigate();
  const { languageStrings } = useLanguage();

  const handleViewProject = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  const handleBuyProject = (project: Project) => {
    const phoneNumber =
      languageStrings?.general_titles?.artist_info?.values?.phone?.replace(
        /[^\d]/g,
        ""
      );
    openProjectWhatsApp(project, phoneNumber);
  };

  const handleWhatsApp = (project: Project) => {
    const phoneNumber =
      languageStrings?.general_titles?.artist_info?.values?.phone?.replace(
        /[^\d]/g,
        ""
      );
    openProjectWhatsApp(project, phoneNumber);
  };

  const handleToggleFavorite = (project: Project) => {
    console.log("Toggle favorito:", project);
    // TODO: Manejar favoritos
  };

  return {
    handleViewProject,
    handleBuyProject,
    handleWhatsApp,
    handleToggleFavorite,
  };
};
