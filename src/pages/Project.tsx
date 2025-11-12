import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { H1 } from "@/mini-components/h1/H1";
import Paragraph from "@/mini-components/paragraph/Paragraph";
import Button from "@/mini-components/Button/Button";
import Image from "@/mini-components/Image/Image";
import { useLanguage } from "@/hooks";
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

  // Obtener proyectos desde Remote Config
  const projects = useMemo<ProjectType[]>(() => {
    const remoteProjects = languageStrings?.gallery_page?.projects;
    if (Array.isArray(remoteProjects)) {
      return remoteProjects as ProjectType[];
    }
    return [];
  }, [languageStrings]);

  // Buscar el proyecto por ID
  const project = projects.find((p) => p.id === id);

  // Debug: ver qué IDs tenemos disponibles
  console.log("ID buscado:", id);
  console.log("Proyectos disponibles:", projects.length);
  console.log(
    "IDs disponibles:",
    projects.map((p) => p.id)
  );
  console.log("Proyecto encontrado:", project);

  if (!project) {
    return (
      <div className="project-not-found">
        <H1>Proyecto no encontrado</H1>
        <Button text="Volver a la galería" onClick={() => navigate("/")} />
      </div>
    );
  }

  const {
    title,
    description,
    images = [],
    metadata,
    year,
    availability,
    price,
  } = project;

  // TODO: Usar imágenes reales de Firebase Storage cuando estén disponibles
  // Por ahora FORZAMOS el uso de imágenes temporales de desarrollo
  console.log("Imágenes del proyecto:", images);
  console.log("Imágenes temporales que vamos a usar:", TEMP_IMAGES);
  const displayImages = TEMP_IMAGES; // Temporalmente usar siempre las imágenes de prueba

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
    // Lógica para comprar
    console.log("Comprar proyecto:", project.id);
  };

  return (
    <div className="project-page">
      <div className="project-container">
        {/* Título */}
        <div className="project-header">
          <H1 className="project-title">{title}</H1>
        </div>

        {/* Carrusel de imágenes */}
        <div className="project-carousel">
          {/* Botón izquierdo */}
          {displayImages.length > 1 && (
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
            >
              ‹
            </button>
          )}

          <div className="carousel-images">
            {/* Imagen izquierda */}
            {displayImages.length > 1 && (
              <div className="carousel-side-image carousel-left">
                <Image
                  src={
                    displayImages[
                      currentImageIndex === 0
                        ? displayImages.length - 1
                        : currentImageIndex - 1
                    ]
                  }
                  alt={`${title} - Imagen anterior`}
                  className="side-image"
                />
              </div>
            )}

            {/* Imagen principal (centro) */}
            <div className="carousel-main-image">
              <Image
                src={displayImages[currentImageIndex]}
                alt={`${title} - Imagen ${currentImageIndex + 1}`}
                className="main-image"
              />
            </div>

            {/* Imagen derecha */}
            {displayImages.length > 1 && (
              <div className="carousel-side-image carousel-right">
                <Image
                  src={
                    displayImages[
                      currentImageIndex === displayImages.length - 1
                        ? 0
                        : currentImageIndex + 1
                    ]
                  }
                  alt={`${title} - Imagen siguiente`}
                  className="side-image"
                />
              </div>
            )}
          </div>

          {/* Botón derecho */}
          {displayImages.length > 1 && (
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNextImage}
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          )}
        </div>

        {/* Información del proyecto */}
        <div className="project-content">
          {/* Detalles técnicos */}
          <div className="project-details">
            <div className="detail-item">
              <span className="detail-label">Título:</span>
              <span className="detail-value">{title}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Técnica:</span>
              <span className="detail-value">
                {metadata?.technique || "N/A"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Soporte:</span>
              <span className="detail-value">{metadata?.support || "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estilo:</span>
              <span className="detail-value">{metadata?.style || "N/A"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Autor:</span>
              <span className="detail-value">Mónica Rigioni</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Año:</span>
              <span className="detail-value">{year}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Dimensiones:</span>
              <span className="detail-value">{formatDimensions()}</span>
            </div>

            {/* Precio */}
            <div className="project-price">
              <span className="price-label">Precio:</span>
              <span className="price-value">{formatPrice(price)}</span>
            </div>

            {/* Descripción */}
            <div className="project-description-section">
              <h3 className="description-title">Descripción de la obra:</h3>
              <Paragraph className="project-description">
                {description}
              </Paragraph>
            </div>
          </div>

          {/* Acciones */}
          <div className="project-actions">
            <div className="availability-badge">
              <span
                className={`availability-status ${
                  availability === "Disponible"
                    ? "status-available"
                    : "status-sold"
                }`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
