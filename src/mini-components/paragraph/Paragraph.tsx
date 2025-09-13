import React from "react";
import type { ParagraphProps } from "./paragraph.interface";


const Paragraph: React.FC<ParagraphProps> = ({
  text,
  color,
  fontSize,
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
      {text}
    </p>
  );
};

export default Paragraph;
