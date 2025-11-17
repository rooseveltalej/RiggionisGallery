import { useNavigate } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import { openProjectWhatsApp } from "@/utils/projectFormatters";
import type { Project } from "@/components/projectCard/ProjectCard.interface";

export const useProjectActions = () => {
  const navigate = useNavigate();
  const { languageStrings } = useLanguage();

  const extractArtistPhone = () => {
    return languageStrings?.general_titles?.artist_info?.values?.phone?.replace(
      /[^\d]/g,
      ""
    );
  };

  const handleViewProject = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  const handleContactArtist = (project: Project) => {
    const phone = extractArtistPhone();
    openProjectWhatsApp(project, phone);
  };

  const handleToggleFavorite = (project: Project) => {
    console.log("Toggle favorito:", project);
    // TODO: Manejar favoritos
  };

  return {
    handleViewProject,
    handleContactArtist,
    handleToggleFavorite,
  };
};
