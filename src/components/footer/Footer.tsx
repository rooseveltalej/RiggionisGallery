import React from 'react';
import type { FooterProps } from './Footer.interface';
import { H1 } from '../../mini-components/h1';
import { H3 } from '../../mini-components/h3';
import Paragraph from '../../mini-components/paragraph/Paragraph';
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
          <H1 className="footer-title">{companyName}</H1>
          <div className="artist-info">
            <Paragraph 
              className="artist-name" 
              color="var(--gray-500)"
              fontWeight="600"
            >
              {artistInfo.name}
            </Paragraph>
            <Paragraph 
              className="artist-title" 
              color="var(--gray-200)"
            >
              {artistInfo.title}
            </Paragraph>
          </div>
        </div>
        
        <div className="footer-section">
          <H3>Contacto</H3>
          {contactContent}
        </div>

        <div className="footer-section">
          <H3>Sígueme</H3>
          {socialContent}
        </div>

        <div className="footer-section">
          <H3>Desarrolladores</H3>
          {developersContent}
        </div>
      </div>
      
      <div className="footer-bottom">
        <Paragraph 
          color="var(--gray-300)"
          fontSize="0.85rem"
        >
          &copy; {year} {companyName}. Todos los derechos reservados.
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;