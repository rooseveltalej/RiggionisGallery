import React from "react";
import Button from "../../mini-components/Button/Button";
import styles from "./WhatsAppButton.module.css";

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
  text?: string;
  iconSrc?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  text = "WhatsApp",
  iconSrc,
  className = "",
  onClick,
  ariaLabel,
  title,
  disabled = false,
  target = "_blank",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Llamar al onClick personalizado si existe
    if (onClick) {
      onClick(e);
    }

    // Si el evento no fue prevenido, abrir WhatsApp
    if (!e.defaultPrevented && phoneNumber) {
      const encodedMessage = message ? encodeURIComponent(message) : "";
      const cleanPhone = phoneNumber.replace(/\D/g, "");
      const whatsappUrl = `https://wa.me/${cleanPhone}${
        encodedMessage ? `?text=${encodedMessage}` : ""
      }`;

      const isExternal = target === "_blank";

      window.open(
        whatsappUrl,
        target,
        isExternal ? "noopener,noreferrer" : undefined
      );
    }
  };

  const defaultAriaLabel = `Enviar mensaje de WhatsApp a ${phoneNumber}`;
  const combinedClassName = `${styles.whatsappButton} ${className}`.trim();

  return (
    <Button
      className={combinedClassName}
      text={text}
      icon={iconSrc}
      onClick={handleClick}
      aria-label={ariaLabel || defaultAriaLabel}
      title={title || ariaLabel || defaultAriaLabel}
      disabled={disabled}
    />
  );
};

export default WhatsAppButton;
