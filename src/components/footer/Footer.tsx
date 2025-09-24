import React from 'react';
import type { FooterProps } from './Footer.interface';
import './Footer.css';

const Footer: React.FC<FooterProps> = ({ 
  companyName = "Riggioni's Gallery",
  artistInfo = {
    name: "Mónica María Riggioni Esquivel",
    title: "Bach. y Lic. en Diseño Plástico énf. Diseño Pictórico"
  },
  year = new Date().getFullYear(),
  contactContent,
  socialContent,
  developersContent,
  className,
  ...rest 
}) => {
  return (
    <footer className={`footer ${className || ''}`} {...rest}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">{companyName}</h3>
          <div className="artist-info">
            <p className="artist-name">{artistInfo.name}</p>
            <p className="artist-title">{artistInfo.title}</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          {contactContent}
        </div>

        <div className="footer-section">
          <h3>Sígueme</h3>
          {socialContent}
        </div>

        <div className="footer-section">
          <h3>Desarrolladores</h3>
          {developersContent}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} {companyName}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;