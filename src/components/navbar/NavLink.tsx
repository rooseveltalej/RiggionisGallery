import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavLinkProps } from "./Navbar.interface";
import "./NavLink.css";

const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path || item.isActive;

  return (
    <Link
      to={item.path}
      className={`nav-link ${isActive ? "nav-link--active" : ""}`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
};

export default NavLink;
