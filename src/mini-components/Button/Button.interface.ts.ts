import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  iconSize?: React.CSSProperties["width"];
  iconColor?: React.CSSProperties["color"];
  color?: string;
}
