// src/mini-components/Button/Button.tsx
import React from "react";
import "./Button.css";
import type { ButtonProps } from "./types";

type CSSWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  color = "#5c0a0a",
  ...rest
}) => {
  const style: CSSWithVars = {
    "--btn-bg": color,
  };

  return (
    <button className="button" style={style} {...rest}>
      {icon && <span className="button-icon">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
