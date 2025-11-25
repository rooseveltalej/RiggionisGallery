import type { SelectHTMLAttributes } from "react";
import type React from "react";

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  placeholder?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  iconSize?: React.CSSProperties["width"];
  iconColor?: React.CSSProperties["color"];
}
