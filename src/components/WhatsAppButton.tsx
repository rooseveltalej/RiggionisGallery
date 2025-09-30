import React from "react";
import Button from "../mini-components/Button/Button";
import "../pages/Contact.css";

const WhatsAppButton: React.FC = () => {
  return (
    <Button
      className="whatsapp-button"
      text="Enviar mensaje"
      icon={<img src="src/assets/icons/whatsapp.svg" alt="WhatsApp" />}
    />
  );
};

export default WhatsAppButton;
