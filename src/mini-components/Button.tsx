// src/mini-components/Button.tsx
import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode; //Use example: icon={<FaWhatsapp size={20} />}
  color?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  color = "#5c0a0a",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ ["--btn-bg" as any]: color }} 
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;