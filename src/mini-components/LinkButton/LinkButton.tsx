import React from "react";
import "../Button/Button.css";
import type { LinkButtonProps } from "./LinkButton.interface";
import IconWrapper from "../IconWrapper/IconWrapper";

type CSSWithVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  icon,
  iconSize = "1.25rem",
  iconColor,
  color = "--primary-color",
  ...rest
}) => {
  const style: CSSWithVars = { "--btn-bg": color };

  return (
    <a className="button" style={style} {...rest}>
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
    </a>
  );
};

export default LinkButton;
