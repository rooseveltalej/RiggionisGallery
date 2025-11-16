import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { H1 } from "@/mini-components/h1/H1";
import { H2 } from "@/mini-components/h2/H2";
import Button from "@/mini-components/Button/Button";
import { useLanguage } from "@/hooks";
import { ImageCarousel, ProjectDetailsList, PhotoGallery } from "@/components";
import type { Project as ProjectType } from "@/components/projectCard/ProjectCard.interface";
import ejemplo1 from "@/assets/images/testing/ejemplo1.jpg?url";
import ejemplo2 from "@/assets/images/testing/ejemplo2.jpg?url";
import ejemplo3 from "@/assets/images/testing/ejemplo3.jpg?url";
import ejemplo4 from "@/assets/images/testing/ejemplo4.jpg?url";
import "./Project.css";

// Imágenes temporales para desarrollo
const TEMP_IMAGES = [ejemplo1, ejemplo2, ejemplo3, ejemplo4];

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
    [languageStrings]
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

  const { title, description, metadata, year, availability, price } = project;

  // TODO: Usar imágenes reales de Firebase Storage cuando estén disponibles
  const displayImages = TEMP_IMAGES;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  };

  const formatPrice = (price?: { amount: number; currency: string }) => {
    if (!price) return "Consultar precio";
    return new Intl.NumberFormat("es-CR", {
      style: "currency",
      currency: price.currency === "USD" ? "USD" : "CRC",
      minimumFractionDigits: 0,
      currencyDisplay: "narrowSymbol",
    }).format(price.amount);
  };

  const formatDimensions = () => {
    if (!metadata?.dimensions) return "";
    const { width, height, unit } = metadata.dimensions;
    return `${width}${unit} x ${height}${unit}`;
  };

  const handleBuy = () => {
    // TODO: Implementar lógica de compra con WhatsApp
  };

  const handleViewMore = () => {
    // TODO: Implementar funcionalidad para ver más fotos (modal, lightbox, etc.)
  };

  // Formatear datos para los componentes
  const formattedPrice = formatPrice(price);
  const formattedDimensions = formatDimensions();

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
        <section
          className="related-projects-section"
          aria-labelledby="related-projects-title"
        >
          <H2 id="related-projects-title" className="section-title">
            Proyectos relacionados
          </H2>
          {/* Carrusel se agregará más adelante */}
        </section>
      </div>
    </div>
  );
};

export default Project;
