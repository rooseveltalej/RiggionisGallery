import type React from "react";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  color?: React.CSSProperties["color"];
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  className?: string; // Optional additional class names
}
