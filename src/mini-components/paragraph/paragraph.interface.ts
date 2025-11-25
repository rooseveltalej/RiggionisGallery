import type React from "react";
import type { TextSize } from "../../utils/constants/textSizes";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  color?: React.CSSProperties["color"];
  fontSize?: TextSize | React.CSSProperties["fontSize"]; // Permite tanto las constantes como strings custom
  fontWeight?: React.CSSProperties["fontWeight"];
  className?: string; // Optional additional class names
}
