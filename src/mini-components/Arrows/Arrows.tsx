import React from "react";
import type { ArrowsProps } from "./Arrows.interface";
import "./Arrows.css";

const Arrows: React.FC<ArrowsProps> = ({ direction, onClick,size,color, disabled,style, ...rest }) => {
  const isLeft = direction === "left";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`arrow ${isLeft ? "left" : "right"} ${disabled ? "disabled" : ""}`}
      style={{
        fontSize: size,
        color: color,
        ...style,
      }}
      {...rest}
    >
      {isLeft ? "<" : ">"}
    </button>
  );
};

export default Arrows;