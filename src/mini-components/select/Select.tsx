import React from 'react';
import type { SelectProps } from './Select.interface';
import './Select.css';

const Select: React.FC<SelectProps> = ({ 
  options, 
  placeholder = "Seleccionar...", 
  className,
  style,
  onChange,
  ...rest 
}) => {
  return (
    <select
      className={`select ${className || ''}`}
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
  );
};

export default Select;