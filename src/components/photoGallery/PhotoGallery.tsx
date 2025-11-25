import React from "react";
import { H2 } from "@/mini-components/h2/H2";
import Image from "@/mini-components/Image/Image";
import Button from "@/mini-components/Button/Button";
import type { PhotoGalleryProps } from "./PhotoGallery.interface";
import "./PhotoGallery.css";

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  images,
  title,
  onViewMore,
  onViewImage,
  limit = 6,
  allPhotosText = "Todas las fotografías",
  viewMoreText = "Ver más",
  viewMoreAriaLabel = "Ver más fotografías",
  photoLabelTemplate = "Fotografía {number} de {total}",
}) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="photo-gallery-section" aria-labelledby="gallery-title">
      <H2 id="gallery-title" className="gallery-title">
        {allPhotosText}
      </H2>
      <ul className="photos-grid">
        {images.map((image, index) => (
          <li
            key={index}
            className="photo-item"
            tabIndex={0}
            aria-label={photoLabelTemplate
              .replace("{number}", String(index + 1))
              .replace("{total}", String(images.length))}
            onClick={() => onViewImage?.(image, index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onViewImage?.(image, index);
              }
            }}
          >
            <Image
              src={image}
              alt={`${title} - Foto ${index + 1}`}
              className="photo-thumbnail"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      {onViewMore && images.length >= limit && (
        <Button
          text={viewMoreText}
          className="view-more-btn"
          onClick={onViewMore}
          aria-label={viewMoreAriaLabel}
        />
      )}
    </section>
  );
};

PhotoGallery.displayName = "PhotoGallery";
