import React from "react";
import type { H3Props } from "./H3.interface";
import { H3_BASE_CLASS, H3_DEFAULTS } from "../../utils/constants/textSizes";
import "./H3.css";

export const H3: React.FC<H3Props> = ({
  children,
  color,
  fontSize = H3_DEFAULTS.FONT_SIZE,
  fontWeight = H3_DEFAULTS.FONT_WEIGHT,
  className = "",
  ...rest
}) => {
  const style: React.CSSProperties = {
    color,
    fontSize,
    fontWeight,
  };

  return (
    <h3 className={`${H3_BASE_CLASS} ${className}`.trim()} style={style} {...rest}>
      {children}
    </h3>
  );
};

H3.displayName = "H3";
