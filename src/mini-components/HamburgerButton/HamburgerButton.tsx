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
  const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={`hamburger-icon ${isOpen ? "hamburger-icon--active" : ""} ${props.className ?? ""}`}
      {...props}
    >
      <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
    </svg>
  );

  return (
    <Button
      text=""
      icon={HamburgerIcon}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={ariaLabel}
      title={isOpen ? "Cerrar menú" : "Abrir menú"}
      type="button"
      className={`hamburger-button ${className}`}
      color="transparent"
    />
  );
};

export default HamburgerButton;
