// src/mini-components/Button/Button.tsx
import React from "react";
import "./Button.css";
import type { ButtonProps } from "./types";

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
