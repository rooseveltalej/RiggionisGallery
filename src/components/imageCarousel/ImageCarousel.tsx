import React from "react";
import Image from "@/mini-components/Image/Image";
import type { ImageCarouselProps } from "./ImageCarousel.interface";
import "./ImageCarousel.css";

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  title,
  currentIndex,
  onPrevious,
  onNext,
}) => {
  if (!images || images.length === 0) {
    return (
      <div className="carousel-empty" role="status" aria-live="polite">
        <p>No hay imágenes disponibles</p>
      </div>
    );
  }

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;
  const previousIndex = hasPrevious ? currentIndex - 1 : images.length - 1;
  const nextIndex = hasNext ? currentIndex + 1 : 0;
  const hasMultipleImages = images.length > 1;

  return (
    <div
      className="image-carousel"
      role="region"
      aria-label="Carrusel de imágenes"
    >
      {/* Botón izquierdo */}
      {hasMultipleImages && (
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={onPrevious}
          aria-label="Ver imagen anterior"
          type="button"
        >
          ‹
        </button>
      )}

      <div className="carousel-images">
        {/* Imagen izquierda */}
        {hasMultipleImages && (
          <div
            className="carousel-side-image carousel-left"
            onClick={onPrevious}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onPrevious();
              }
            }}
            aria-label="Clic para ver imagen anterior"
          >
            <Image
              src={images[previousIndex]}
              alt={`${title} - Imagen ${previousIndex + 1}`}
              className="side-image"
            />
          </div>
        )}

        {/* Imagen principal (centro) */}
        <div className="carousel-main-image">
          <Image
            src={images[currentIndex]}
            alt={`${title} - Imagen principal ${currentIndex + 1} de ${
              images.length
            }`}
            className="main-image"
          />
        </div>

        {/* Imagen derecha */}
        {hasMultipleImages && (
          <div
            className="carousel-side-image carousel-right"
            onClick={onNext}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onNext();
              }
            }}
            aria-label="Clic para ver imagen siguiente"
          >
            <Image
              src={images[nextIndex]}
              alt={`${title} - Imagen ${nextIndex + 1}`}
              className="side-image"
            />
          </div>
        )}
      </div>

      {/* Botón derecho */}
      {hasMultipleImages && (
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={onNext}
          aria-label="Ver imagen siguiente"
          type="button"
        >
          ›
        </button>
      )}

      {/* Indicador de posición para lectores de pantalla */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Imagen {currentIndex + 1} de {images.length}
      </div>
    </div>
  );
};

ImageCarousel.displayName = "ImageCarousel";
