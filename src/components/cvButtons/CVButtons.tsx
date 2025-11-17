import React from "react";
import { LinkButton } from "@/mini-components";
import Button from "@/mini-components/Button/Button";
import type { CVButtonsProps } from "./CVButtons.types";

const CVButtons: React.FC<CVButtonsProps> = ({
  viewText = "Ver CV",
  downloadText = "Descargar CV",
  viewUrl,
  downloadUrl,
  downloadName = "CV.pdf",
  className = "btn",
}) => {
  const isValidUrl = (url?: string | null): url is string => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validView = isValidUrl(viewUrl) ? viewUrl : undefined;
  const validDownload = isValidUrl(downloadUrl) ? downloadUrl : undefined;

  const DisabledButton: React.FC<{ label: string; hint: string }> = ({
    label,
    hint,
  }) => (
    <Button
      text={label}
      className={`${className} is-disabled`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      disabled
      aria-label={hint}
    />
  );

  return (
    <div
      className="skills-actions"
      role="group"
      aria-label="Acciones del currículum"
      title="Ver o descargar el currículum"
    >
      {validView ? (
        <LinkButton
          text={viewText}
          href={validView}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={`${viewText} (se abre en nueva pestaña)`}
          title={viewText}
        />
      ) : (
        <DisabledButton label={viewText} hint="Enlace de vista no disponible" />
      )}

      {validDownload ? (
        <LinkButton
          text={downloadText}
          href={validDownload}
          download={downloadName}
          className={className}
          aria-label={`Descargar ${downloadName}`}
          title={downloadText}
        />
      ) : (
        <DisabledButton
          label={downloadText}
          hint="Enlace de descarga no disponible"
        />
      )}
    </div>
  );
};

export default CVButtons;
