import type React from "react";
import type { TextSize } from "../../utils/constants/textSizes";

export interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  color?: React.CSSProperties["color"];
  fontSize?: TextSize | React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  className?: string;
}
