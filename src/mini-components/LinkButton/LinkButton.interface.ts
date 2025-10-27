import type { AnchorHTMLAttributes } from "react";

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  iconSize?: React.CSSProperties["width"];
  iconColor?: React.CSSProperties["color"];
  color?: string;
}
