import React from "react";
import type { ArrowsProps } from "./Arrows.interface";
import "./Arrows.css";
const Arrows: React.FC<ArrowsProps> = ({ direction, onClick, size, color, disabled, style, ...rest }) => {
  const isLeft = direction === "left";
  
  // Función para obtener el tamaño del SVG basado en el prop size
  const getSvgSize = () => {
    if (typeof size === 'string') {
      switch (size) {
        case 'sm': return '16px';
        case 'md': return '24px';
        case 'lg': return '32px'
        default: return '24px';
      }
    }
    return typeof size === 'number' ? `${size}px` : '24px';
  };
  const svgSize = getSvgSize();
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`arrow ${isLeft ? "left" : "right"} ${disabled ? "disabled" : ""}`}
      style={{color: color,
        ...style,
      }}
      aria-label={isLeft ? "Ir a la izquierda" : "Ir a la derecha"}
      {...rest}
    >
     <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ transform: isLeft ? "rotate(180deg)" : "none" }}
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Arrows;