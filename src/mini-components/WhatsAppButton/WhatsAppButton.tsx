import React, { useState, useMemo } from "react";
import "./WhatsAppButton.css";
import type { WhatsAppButtonProps } from "./WhatsAppButton.interface";
import Button from "../Button/Button";
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
  const [isLoading, setIsLoading] = useState(false);

  const whatsappLink = useMemo(
    () => generateLink(phoneNumber, message),
    [generateLink, phoneNumber, message]
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    setIsLoading(true);
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      text={text}
      icon="/icons/whatsapp.svg"
      iconSize={iconSize}
      iconColor={iconColor}
      className="whatsapp-button"
      style={style}
      onClick={handleClick}
      disabled={isLoading}
      {...rest}
    />
  );
};

export default WhatsAppButton;