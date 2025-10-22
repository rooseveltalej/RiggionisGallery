import React from "react";
import Button from "../mini-components/Button/Button";
import styles from "./WhatsAppButton.module.css";

type WhatsAppButtonProps = {
  text: string;
  iconSrc: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, iconSrc }) => {
  return (
    <Button
      className={styles["whatsapp-button"]}
      text={text}
      icon={<img src={iconSrc} alt="WhatsApp" />}
    />
  );
};

export default WhatsAppButton;
