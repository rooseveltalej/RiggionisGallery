import type React from "react";

export interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  size?: React.CSSProperties["width"];
  color?: React.CSSProperties["color"];
  className?: string;
}