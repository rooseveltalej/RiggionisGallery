import React from "react";
import type { HamburgerButtonProps } from "./HamburgerButton.interface";
import "./HamburgerButton.css";

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  ariaLabel = "Menú de navegación",
  className = "",
}) => {
  return (
    <button
      className={`hamburger-button ${
        isOpen ? "hamburger-button--active" : ""
      } ${className}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
      type="button"
    >
      <span className="hamburger-button__bar"></span>
      <span className="hamburger-button__bar"></span>
      <span className="hamburger-button__bar"></span>
    </button>
  );
};

export default HamburgerButton;
