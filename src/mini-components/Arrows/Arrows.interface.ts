import type { ButtonHTMLAttributes } from "react";
export type ArrowDirection = "left" | "right";
export type ArrowSize = "sm" | "md" | "lg";

export interface ArrowsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: ArrowDirection;
  size?: ArrowSize;
  color?: string;
}