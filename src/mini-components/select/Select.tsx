import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (newState: boolean, event?: any) => {
    setIsOpen(newState);
    if (onChange && event) onChange(event);
  };

  return (
    <div className={`select-container ${isOpen ? 'is-open' : ''}`}>
      <select
        className={`select ${className || ''}`}
        style={style}
        onFocus={() => handleStateChange(true)}
        onBlur={() => handleStateChange(false)}
        onChange={(e) => handleStateChange(false, e)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
    </div>
  );
};

export default Select;