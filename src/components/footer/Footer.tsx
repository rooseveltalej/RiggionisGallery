import React from 'react';
import type { FooterProps } from './Footer.interface';
import './Footer.css';

const Footer: React.FC<FooterProps> = ({ 
  companyName = "Riggioni's Gallery",
  year = new Date().getFullYear(),
  className,
  ...rest 
}) => {
  //NOTE: This component should be refactored to use the minicomponents that are waiting code review
  return (
    <footer className={`footer ${className || ''}`} {...rest}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">{companyName}</h3>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
        </div>

        <div className="footer-section">
          <h3>Sigueme</h3>
        </div>

        <div className="footer-section">
          <h3>Desarrolladores</h3>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {year} {companyName}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
