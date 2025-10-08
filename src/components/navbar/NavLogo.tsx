import React from "react";
import { Link } from "react-router-dom";
import type { NavLogoProps } from "./Navbar.interface";
import "./NavLogo.css";

const NavLogo: React.FC<NavLogoProps> = ({ src, alt, linkTo = "/" }) => {
  return (
    <Link to={linkTo} className="nav-logo">
      <img src={src} alt={alt} className="nav-logo__image" />
    </Link>
  );
};

export default NavLogo;
