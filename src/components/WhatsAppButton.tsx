import React from "react";
import Button from "../mini-components/Button/Button";
import styles from "./WhatsAppButton.module.css";

type WhatsAppButtonProps = {
  text: string;
  iconSrc: string;
  phoneNumber?: string;
  message?: string;
  ariaLabel?: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text,
  iconSrc,
  phoneNumber,
  message,
  ariaLabel,
}) => {
  const handleClick = () => {
    if (phoneNumber) {
      const encodedMessage = message ? encodeURIComponent(message) : "";
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}${
        encodedMessage ? `?text=${encodedMessage}` : ""
      }`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const defaultAriaLabel = phoneNumber
    ? `Enviar mensaje de WhatsApp a ${phoneNumber}`
    : "Botón de WhatsApp";

  return (
    <Button
      className={styles.whatsappButton}
      text={text}
      icon={iconSrc}
      onClick={handleClick}
      aria-label={ariaLabel || defaultAriaLabel}
      title={ariaLabel || defaultAriaLabel}
    />
  );
};

export default WhatsAppButton;
