import React from "react";
import type { ParagraphProps } from "./paragraph.interface";
import { TEXT_SIZES } from "../../utils/constants/textSizes";

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  color,
  fontSize = TEXT_SIZES.BASE,
  fontWeight,
  className = "",
}) => {
  const style: React.CSSProperties = {
    color,
    fontSize,
    fontWeight,
  };

  return (
    <p className={`paragraph ${className}`.trim()} style={style}>
      {children}
    </p>
  );
};

export default Paragraph;
