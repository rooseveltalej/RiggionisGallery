export interface NavItem {
  label: string;
  path: string;
  isActive?: boolean;
}

export interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
}

export interface NavLogoProps {
  src: string;
  alt: string;
  linkTo?: string;
}

export interface NavbarProps {
  navItems: NavItem[];
  logoSrc: string;
  logoAlt?: string;
  className?: string;
  backToHomeText?: string;
}
