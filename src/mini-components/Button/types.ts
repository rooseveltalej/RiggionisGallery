// src/mini-components/Button/types.ts
import React from "react";

export interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void;
}
