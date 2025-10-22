import React from "react";
import type { H1Props } from "./H1.interface";
import { H1_BASE_CLASS, H1_DEFAULTS } from "../../utils/constants/textSizes";
import "./H1.css";

export const H1: React.FC<H1Props> = ({
  children,
  color,
  fontSize = H1_DEFAULTS.FONT_SIZE,
  fontWeight = H1_DEFAULTS.FONT_WEIGHT,
  className = "",
  ...rest
}) => {
  const style: React.CSSProperties = {
    color,
    fontSize,
    fontWeight,
  };

  return (
    <h1 className={`${H1_BASE_CLASS} ${className}`.trim()} style={style} {...rest}>
      {children}
    </h1>
  );
};

H1.displayName = "H1";
