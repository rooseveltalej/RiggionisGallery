import React from "react";
import type { H2Props } from "./types";
import { H2_BASE_CLASS, H2_DEFAULTS } from "./constants";
import "./H2.css";

export const H2: React.FC<H2Props> = ({
  children,
  color,
  fontSize = H2_DEFAULTS.FONT_SIZE,
  fontWeight,
  className = "",
}) => {
  const style: React.CSSProperties = {
    color,
    fontSize,
    fontWeight,
  };

  return (
    <h2 className={`${H2_BASE_CLASS} ${className}`.trim()} style={style}>
      {children}
    </h2>
  );
};

H2.displayName = "H2";
