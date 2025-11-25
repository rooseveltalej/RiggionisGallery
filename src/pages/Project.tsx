import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { H1 } from "@/mini-components/h1/H1";
import Button from "@/mini-components/Button/Button";
import { useLanguage } from "@/hooks";
import {
  ImageCarousel,
  ProjectDetailsList,
  PhotoGallery,
  SimilarProjects,
} from "@/components";
import { formatPrice, formatDimensions } from "@/utils/projectFormatters";
import type { Project as ProjectType } from "@/components/projectCard/ProjectCard.interface";
import "./Project.css";

interface ProjectDetailsProps {
  projectId?: string;
}

const Project: React.FC<ProjectDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { languageStrings } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = useMemo<ProjectType[]>(
    () =>
      Array.isArray(languageStrings?.gallery_page?.projects)
        ? languageStrings.gallery_page.projects
        : [],
    [languageStrings],
  );

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <H1>Proyecto no encontrado</H1>
        <Button text="Volver a la galería" onClick={() => navigate("/")} />
      </div>
    );
  }

  const { title, description, metadata, year, availability, price, images } =
    project;

  const displayImages =
    images && images.length > 0 ? images : ["/icons/fallback.png"];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handleBuy = () => {
    // TODO: Implementar lógica de compra con WhatsApp
  };

  const handleViewMore = () => {
    // TODO: Implementar funcionalidad para ver más fotos (modal, lightbox, etc.)
  };

  // Formatear datos para los componentes
  const formattedPrice = formatPrice(price);
  const formattedDimensions = formatDimensions(metadata?.dimensions);
  const relatedProjectsTitle =
    languageStrings?.general_titles?.related_projects ||
    "Proyectos relacionados";

  return (
    <div className="project-page">
      <div className="project-container">
        {/* Título */}
        <header className="project-header">
          <H1 className="project-title">{title}</H1>
        </header>

        {/* Carrusel de imágenes */}
        <ImageCarousel
          images={displayImages}
          title={title}
          currentIndex={currentImageIndex}
          onPrevious={handlePrevImage}
          onNext={handleNextImage}
        />

        {/* Información del proyecto */}
        <div className="project-content">
          <ProjectDetailsList
            title={title}
            technique={metadata?.technique}
            support={metadata?.support}
            style={metadata?.style}
            author="Mónica Rigioni"
            year={year?.toString() || "N/A"}
            dimensions={formattedDimensions}
            price={formattedPrice}
            description={description || "Sin descripción disponible"}
          />

          {/* Acciones */}
          <aside className="project-actions" aria-label="Acciones del proyecto">
            <div className="availability-badge">
              <span
                className={`availability-status ${
                  availability === "Disponible"
                    ? "status-available"
                    : "status-sold"
                }`}
                role="status"
                aria-label={`Estado: ${availability}`}
              >
                {availability}
              </span>
            </div>
            <Button
              text="COMPRAR"
              className="btn-buy"
              onClick={handleBuy}
              disabled={availability !== "Disponible"}
            />
          </aside>
        </div>

        {/* Galería de fotografías */}
        <PhotoGallery
          images={displayImages}
          title={title}
          onViewMore={handleViewMore}
        />

        {/* Proyectos relacionados */}
        <SimilarProjects
          projectId={id || ""}
          projects={projects}
          title={relatedProjectsTitle}
        />
      </div>
    </div>
  );
};

export default Project;
