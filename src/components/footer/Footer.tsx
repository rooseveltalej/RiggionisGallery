import React from 'react';
import type { FooterProps } from './Footer.interface';
import { H1 } from '@/mini-components';
import { H2 } from '@/mini-components';
import {Paragraph} from '@/mini-components';
import './Footer.css';

const Footer: React.FC<FooterProps> = ({ 
  companyName = "Riggioni's Gallery",
  artistContent = (
    <>
      <Paragraph 
        className="artist-name" 
        color="var(--footer-text-secondary)"
        fontWeight="600"
      >
        Mónica María Riggioni Esquivel
      </Paragraph>
      <Paragraph 
        className="artist-title" 
        color="var(--footer-text-muted)"
      >
        Bach. y Lic. en Diseño Plástico énf. Diseño Pictórico
      </Paragraph>
    </>
  ),
  year = new Date().getFullYear(),
  sections = {},
  className,
  ...rest 
}) => {
  const { contactContent, socialContent, developersContent } = sections;

  return (
    <footer className={`footer ${className || ''}`} {...rest}>
      <div className="footer-content">
        <div className="footer-section">
          <H1 className="footer-title">{companyName}</H1>
          <div className="artist-info">
            {artistContent}
          </div>
        </div>
        
        <div className="footer-section">
          <H2 className="footer-h2">Contacto</H2>
          {contactContent}
        </div>

        <div className="footer-section">
          <H2 className="footer-h2">Sígueme</H2>
          {socialContent}
        </div>

        <div className="footer-section">
          <H2 className="footer-h2">Desarrolladores</H2>
          {developersContent}
        </div>
      </div>
      
      <div className="footer-bottom">
        <Paragraph 
          color="var(--footer-text-light)"
          fontSize="0.85rem"
        >
          &copy; {year} {companyName}. Todos los derechos reservados.
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;