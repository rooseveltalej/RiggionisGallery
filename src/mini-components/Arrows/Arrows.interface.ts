import type { ButtonHTMLAttributes } from "react";
    
export interface ArrowsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
  size?: string | number;
  color?: string;
}