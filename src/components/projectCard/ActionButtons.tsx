import React, { useCallback } from 'react';
import Button from '@/mini-components/Button/Button';
import IconWhatsapp from '@/assets/icons/whatsapp.svg';
import type { ActionButtonsProps } from  '@/components/projectCard/ActionCard.interface';

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  project,
  onViewProject,
  // onBuyProject, // Comentado temporalmente - se programará más adelante
  onWhatsApp,
  ariaLabels,
}) => {
  const handleViewProject = useCallback(() => onViewProject?.(project), [onViewProject, project]);
  // const handleBuyProject = useCallback(() => onBuyProject?.(project), [onBuyProject, project]);
  const handleWhatsApp = useCallback(() => onWhatsApp?.(project), [onWhatsApp, project]);
  return (
    <div className="project-card__action-buttons">
      <Button
        text="Ver proyecto"
        onClick={handleViewProject}
        className="project-card__button project-card__button--view"
        aria-label={ariaLabels.viewProject}
      />
      {/* Botón de Comprar - Oculto temporalmente, se programará más adelante */}
      {/* <Button
        text="Comprar"
        onClick={handleBuyProject}
        className="project-card__button project-card__button--buy"
        aria-label={ariaLabels.buyProject}
      /> */}
      <Button
        text="WhatsApp"
        icon={IconWhatsapp}
        onClick={handleWhatsApp}
        className="project-card__button project-card__button--whatsapp"
        aria-label={ariaLabels.whatsApp}
      />
    </div>
  );
};