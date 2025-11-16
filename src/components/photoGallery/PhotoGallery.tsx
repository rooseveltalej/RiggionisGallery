import React from "react";
import { H2 } from "@/mini-components/h2/H2";
import Image from "@/mini-components/Image/Image";
import type { PhotoGalleryProps } from "./PhotoGallery.interface";
import "./PhotoGallery.css";

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  images,
  title,
  onViewMore,
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="photo-gallery-section" aria-labelledby="gallery-title">
      <H2 id="gallery-title" className="gallery-title">
        Todas las fotografías
      </H2>
      <ul className="photos-grid">
        {images.map((image, index) => (
          <li
            key={index}
            className="photo-item"
            tabIndex={0}
            aria-label={`Fotografía ${index + 1} de ${images.length}`}
          >
            <Image
              src={image}
              alt={`${title} - Foto ${index + 1}`}
              className="photo-thumbnail"
            />
          </li>
        ))}
      </ul>
      <button
        className="view-more-btn"
        onClick={onViewMore}
        type="button"
        aria-label="Ver más fotografías"
      >
        Ver más
      </button>
    </section>
  );
};

PhotoGallery.displayName = "PhotoGallery";
