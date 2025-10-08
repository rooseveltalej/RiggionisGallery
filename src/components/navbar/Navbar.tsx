import React, { useState } from "react";
import type { NavbarProps } from "./Navbar.interface";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import "./Navbar.css";

const Navbar: React.FC<NavbarProps> = ({
  navItems,
  logoSrc,
  logoAlt = "Logo",
  className = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${className}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="navbar__container">
        <NavLogo src={logoSrc} alt={logoAlt} linkTo="/" />

        <button
          className={`navbar__toggle ${
            isMobileMenuOpen ? "navbar__toggle--active" : ""
          }`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Menú de navegación"
          type="button"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        <div
          className={`navbar__menu ${
            isMobileMenuOpen ? "navbar__menu--open" : ""
          }`}
        >
          <ul className="navbar__list">
            {navItems.map((item, index) => (
              <li key={`${item.path}-${index}`} className="navbar__item">
                <NavLink item={item} onClick={closeMobileMenu} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
