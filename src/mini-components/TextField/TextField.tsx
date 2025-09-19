import React, { type FC } from "react";
import "./TextField.css";
import IconWrapper from "../IconWrapper/IconWrapper";

import type { TextFieldProps } from "./TextField.interface";


const TextField: FC<TextFieldProps> = ({ 
  icon, 
  width, 
  className = "",
  ...props 
}) => {
  return (
    <div 
      className={`search-field ${className ?? ""}`.trim()}
      style={width ? { width } : undefined}
    >
      {icon && <IconWrapper icon={icon} className="search-icon" />}
      <input
        className="search-input"
        {...props}
      />
    </div>
  );
};

export default TextField;
