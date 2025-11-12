import React from "react";
import { H3 } from "@/mini-components/h3/H3";
import Paragraph from "@/mini-components/paragraph/Paragraph";
import type { ProjectDetailsListProps } from "./ProjectDetailsList.interface";
import "./ProjectDetailsList.css";

export const ProjectDetailsList: React.FC<ProjectDetailsListProps> = ({
  title,
  technique,
  support,
  style,
  author,
  year,
  dimensions,
  price,
  description,
}) => {
  return (
    <div
      className="project-details"
      role="region"
      aria-label="Detalles del proyecto"
    >
      <dl className="details-list">
        <div className="detail-item">
          <dt className="detail-label">Título:</dt>
          <dd className="detail-value">{title || "N/A"}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-label">Técnica:</dt>
          <dd className="detail-value">{technique || "N/A"}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-label">Soporte:</dt>
          <dd className="detail-value">{support || "N/A"}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-label">Estilo:</dt>
          <dd className="detail-value">{style || "N/A"}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-label">Autor:</dt>
          <dd className="detail-value">{author}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-label">Año:</dt>
          <dd className="detail-value">{year}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-label">Dimensiones:</dt>
          <dd className="detail-value">{dimensions || "N/A"}</dd>
        </div>
      </dl>

      {/* Precio */}
      <div
        className="project-price"
        role="contentinfo"
        aria-label="Precio del proyecto"
      >
        <span className="price-label">Precio:</span>
        <span className="price-value">{price}</span>
      </div>

      {/* Descripción */}
      <div className="project-description-section">
        <H3 className="description-title">Descripción de la obra:</H3>
        <Paragraph className="project-description">{description}</Paragraph>
      </div>
    </div>
  );
};

ProjectDetailsList.displayName = "ProjectDetailsList";
