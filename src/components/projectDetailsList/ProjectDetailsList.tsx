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
  labels = {},
  placeholders = {},
}) => {
  const defaultLabels = {
    title: "Título:",
    technique: "Técnica:",
    support: "Soporte:",
    style: "Estilo:",
    author: "Autor:",
    year: "Año:",
    dimensions: "Dimensiones:",
    price: "Precio:",
    description: "Descripción de la obra:",
    ...labels,
  };

  const defaultPlaceholders = {
    notAvailable: "N/A",
    ...placeholders,
  };

  return (
    <div
      className="project-details"
      role="region"
      aria-label="Detalles del proyecto"
    >
      <dl className="details-list">
        <dt className="detail-label">{defaultLabels.title}</dt>
        <dd className="detail-value">
          {title || defaultPlaceholders.notAvailable}
        </dd>

        <dt className="detail-label">{defaultLabels.technique}</dt>
        <dd className="detail-value">
          {technique || defaultPlaceholders.notAvailable}
        </dd>

        <dt className="detail-label">{defaultLabels.support}</dt>
        <dd className="detail-value">
          {support || defaultPlaceholders.notAvailable}
        </dd>

        <dt className="detail-label">{defaultLabels.style}</dt>
        <dd className="detail-value">
          {style || defaultPlaceholders.notAvailable}
        </dd>

        <dt className="detail-label">{defaultLabels.author}</dt>
        <dd className="detail-value">{author}</dd>

        <dt className="detail-label">{defaultLabels.year}</dt>
        <dd className="detail-value">{year}</dd>

        <dt className="detail-label">{defaultLabels.dimensions}</dt>
        <dd className="detail-value">
          {dimensions || defaultPlaceholders.notAvailable}
        </dd>
      </dl>

      {/* Precio */}
      <div className="project-price" aria-label="Precio del proyecto">
        <span className="price-label">{defaultLabels.price}</span>
        <span className="price-value">{price}</span>
      </div>

      {/* Descripción */}
      <div
        className="project-description-section"
        aria-labelledby="description-title"
      >
        <H3 id="description-title" className="description-title">
          {defaultLabels.description}
        </H3>
        <Paragraph className="project-description">{description}</Paragraph>
      </div>
    </div>
  );
};

ProjectDetailsList.displayName = "ProjectDetailsList";
