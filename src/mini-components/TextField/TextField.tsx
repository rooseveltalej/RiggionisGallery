import React, { type FC } from "react";
import "./TextField.css";

import type { TextFieldProps } from "./TextField.interface";


const TextField: FC<TextFieldProps> = ({ placeholder, icon: Icon, width}) => {
  const style = width ? { width } : undefined;
  return (
    <div className="search-field" style={style}>
      {Icon && <Icon className="search-icon" />}
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
};

export default TextField;
