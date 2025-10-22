import React from "react";
import "./Button.css";
import type { ButtonProps } from "./Button.interface.ts";
import IconWrapper from "../IconWrapper/IconWrapper";

type CSSWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconSize = "1.25rem",
  iconColor,
  color = "--primary-color",
  ...rest
}) => {
  const style: CSSWithVars = {
    "--btn-bg": color,
  };

  return (
    <button className="button" style={style} {...rest}>
      {icon && (
        <span className="button-icon">
          <IconWrapper 
            icon={icon} 
            size={iconSize}
            color={iconColor || "currentColor"}
          />
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};

export default Button;
