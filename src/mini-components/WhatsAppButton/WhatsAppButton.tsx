import React, { useMemo, useState } from "react";
import "./WhatsAppButton.css";
import type { WhatsAppButtonProps } from "./WhatsAppButton.interface";
import Button from "../Button/Button";
import { useWhatsAppLink } from "@/hooks";
import whatsappIcon from "/icons/whatsapp.svg";

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text,
  phoneNumber,
  message,
  icon,
  iconSize = "1.25rem",
  iconColor = "#ffffff",
  style,
  ...rest
}) => {
  const { generateLink } = useWhatsAppLink();
  const [isLoading, setIsLoading] = useState(false);
  const { disabled, ...buttonProps } = rest;

  const whatsappLink = useMemo(
    () => generateLink(phoneNumber, message),
    [generateLink, phoneNumber, message]
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    window.open(whatsappLink, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      text={text}
      icon={icon ?? whatsappIcon}
      iconSize={iconSize}
      iconColor={iconColor}
      className="whatsapp-button"
      style={style}
      onClick={handleClick}
      disabled={isLoading || disabled}
      {...buttonProps}
    />
  );
};

export default WhatsAppButton;
