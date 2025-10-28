import React from "react";
import { LinkButton } from "@/mini-components";
import type { CVButtonsProps } from "./CVButtons.types";

const CVButtons: React.FC<CVButtonsProps> = ({
  viewText = "Ver CV",
  downloadText = "Descargar CV",
  viewUrl,
  downloadUrl,
  downloadName = "CV.pdf",
  className = "btn",
}) => {
  if (!viewUrl && !downloadUrl) return null;

  return (
    <div className="skills-actions">
      {viewUrl && (
        <LinkButton
          text={viewText}
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        />
      )}

      {downloadUrl && (
        <LinkButton
          text={downloadText}
          href={downloadUrl}
          download={downloadName}
          className={className}
        />
      )}
    </div>
  );
};

export default CVButtons;
