import React, { useState } from "react";
import type { NavbarProps } from "./Navbar.interface";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { HamburgerButton } from "../../mini-components/HamburgerButton";
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

        <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

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
