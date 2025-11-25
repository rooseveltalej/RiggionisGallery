import React from "react";
import type { SelectProps } from "./Select.interface";
import IconWrapper from "../IconWrapper/IconWrapper";
import "./Select.css";

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Seleccionar...",
  icon,
  iconSize = "1rem",
  iconColor,
  className,
  style,
  onChange,
  ...rest
}) => {
  return (
    <div className="select-wrapper">
      {icon && (
        <div className="select-icon-left">
          <IconWrapper
            icon={icon}
            size={iconSize}
            color={iconColor || "var(--input-text)"}
          />
        </div>
      )}
      <select
        className={`select ${icon ? "select-with-icon" : ""} ${className || ""}`}
        style={style}
        onChange={onChange}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map(({ value, label, disabled }) => (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
