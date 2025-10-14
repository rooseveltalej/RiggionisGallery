import React from "react";
import "./WhatsAppButton.css";
import type { WhatsAppButtonProps } from "./WhatsAppButton.interface";
import Button from "../Button/Button";
import WhatsAppIcon from "./WhatsAppIcon";
import { useWhatsAppLink } from "@/hooks";

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text,
  phoneNumber,
  message,
  iconSize = "1.25rem",
  iconColor = "#ffffff",
  style,
  ...rest
}) => {
  const { generateLink } = useWhatsAppLink();
  const whatsappLink = generateLink(phoneNumber, message);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      text={text}
      icon={WhatsAppIcon}
      iconSize={iconSize}
      iconColor={iconColor}
      className="whatsapp-button"
      style={style}
      onClick={handleClick}
      {...rest}
    />
  );
};

export default WhatsAppButton;