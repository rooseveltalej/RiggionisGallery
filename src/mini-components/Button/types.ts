// src/mini-components/Button/types.ts
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  icon?: React.ReactNode;
  color?: string;
}
