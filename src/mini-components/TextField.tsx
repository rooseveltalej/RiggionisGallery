import React, { type FC, type InputHTMLAttributes } from "react";
import "./TextField.css";

// Definimos los props

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string; 
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  width?: string | number; // prop optional for defining width
}


const SearchField: FC<SearchFieldProps> = ({ placeholder = "Buscar...", icon: Icon, width}) => {
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

export default SearchField;
