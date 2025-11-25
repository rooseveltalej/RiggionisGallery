import React from "react";
import Arrows from "@/mini-components/Arrows/Arrows";
import type { ImageNavigationProps } from "@/components/projectCard/ActionCard.interface";

export const ImageNavigation: React.FC<ImageNavigationProps> = ({
  onPrevious,
  onNext,
  isFirstImage,
  isLastImage,
}) => {
  return (
    <>
      <div className="project-card__arrow project-card__arrow--left">
        <Arrows
          direction="left"
          onClick={onPrevious}
          disabled={isFirstImage}
          size="sm"
          color={isFirstImage ? "#ccc" : "#fff"}
        />
      </div>
      <div className="project-card__arrow project-card__arrow--right">
        <Arrows
          direction="right"
          onClick={onNext}
          disabled={isLastImage}
          size="sm"
          color={isLastImage ? "#ccc" : "#fff"}
        />
      </div>
    </>
  );
};
