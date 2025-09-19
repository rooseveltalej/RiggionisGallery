import React, { type FC } from "react";
import "./TextField.css";
import IconWrapper from "../IconWrapper/IconWrapper";

import type { TextFieldProps } from "./TextField.interface";


const TextField: FC<TextFieldProps> = ({ icon, width, ...props }) => {
  const style = width ? { width } : undefined;
  return (
    <div className="search-field" style={style}>
      {icon && <IconWrapper icon={icon} className="search-icon" />}
      <input
        className="search-input"
        {...props}
      />
    </div>
  );
};

export default TextField;
