import React from "react";
import type { H2Props } from "./H2.interface";
import { H2_BASE_CLASS, H2_DEFAULTS } from "../../utils/constants/textSizes";
import "./H2.css";

export const H2: React.FC<H2Props> = ({
  children,
  color,
  fontSize = H2_DEFAULTS.FONT_SIZE,
  fontWeight = H2_DEFAULTS.FONT_WEIGHT,
  className = "",
  ...rest
}) => {
  const style: React.CSSProperties = {
    color,
    fontSize,
    fontWeight,
  };

  return (
    <h2 className={`${H2_BASE_CLASS} ${className}`.trim()} style={style} {...rest}>
      {children}
    </h2>
  );
};

H2.displayName = "H2";
