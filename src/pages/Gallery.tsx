import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../components";
import { H1 } from "../mini-components/h1/H1";
import Button from "../mini-components/Button/Button";
import { useLanguage, useProjectActions } from "../hooks";
import type { Project } from "../components/projectCard/ProjectCard.interface";
import "./Gallery.css";

const Gallery: React.FC = () => {
  const { languageStrings } = useLanguage();
  const {
    handleViewProject,
    handleBuyProject,
    handleWhatsApp,
    handleToggleFavorite,
  } = useProjectActions();
  const navigate = useNavigate();
  const projects = useMemo<Project[]>(() => {
    const remoteProjects = languageStrings?.gallery_page?.projects;
    if (Array.isArray(remoteProjects)) {
      return (remoteProjects as Project[]).slice(0, 9);
    }
    return [];
  }, [languageStrings]);

  const galleryTitle = languageStrings?.gallery_page?.title;
  const seeMoreText = languageStrings?.general_titles?.see_more;
  const buttonTexts = {
    viewProject: languageStrings?.general_titles?.buttons?.view_project,
    whatsapp: languageStrings?.general_titles?.buttons?.whatsapp,
  };

  return (
    <div className="gallery">
      <div className="gallery__header">
        <H1 className="gallery__title">{galleryTitle}</H1>
        <Button
          text={seeMoreText}
          onClick={() => navigate("/projects")}
          className="gallery__view-more-btn"
        />
      </div>

      <div className="gallery__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewProject={handleViewProject}
            onBuyProject={handleBuyProject}
            onWhatsApp={handleWhatsApp}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={false}
            className="gallery__card"
            buttonTexts={buttonTexts}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
