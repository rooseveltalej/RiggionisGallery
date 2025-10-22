import React from "react";
import { Link } from "react-router-dom";
import type { NavLogoProps } from "./Navbar.interface";
import "./NavLogo.css";
import Image from "@/mini-components/Image/Image";

const NavLogo: React.FC<NavLogoProps> = ({ src, alt, linkTo = "/" }) => {
  return (
    <Link
      to={linkTo}
      className="nav-logo"
      aria-label="Ir a la página de inicio"
      title="Volver al inicio"
    >
      <Image src={src} alt={alt} className="nav-logo__image" />
    </Link>
  );
};

export default NavLogo;
