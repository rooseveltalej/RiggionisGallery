import React from "react";
import type { HamburgerButtonProps } from "./HamburgerButton.interface";
import Button from "../Button/Button";
import "./HamburgerButton.css";

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  ariaLabel = "Menú de navegación",
  className = "",
}) => {
  const hamburgerIcon = (
    <div className={`hamburger-icon ${isOpen ? "hamburger-icon--active" : ""}`}>
      <span className="hamburger-icon__bar"></span>
      <span className="hamburger-icon__bar"></span>
      <span className="hamburger-icon__bar"></span>
    </div>
  );

  return (
    <Button
      text=""
      icon={hamburgerIcon}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
      type="button"
      className={`hamburger-button ${className}`}
      color="transparent"
    />
  );
};

export default HamburgerButton;
