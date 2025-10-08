import React from 'react';
import type { FooterProps } from './Footer.interface';
import './Footer.css';

const Footer: React.FC<FooterProps> = ({ 
  generalTitles,
  footerData,
  className,
  ...rest 
}) => {
  return (
    <footer className={`footer ${className || ''}`} {...rest}>
      <div className="footer-content">
        <div className="footer-section footer-left">
          <span className="footer-artist-name">
            {generalTitles.artist_info.values.name}
          </span>
          <span className="footer-artist-email">
            {generalTitles.artist_info.values.email1}
          </span>
        </div>
        <div className="footer-section footer-center">
          //TODO: here will be the social media icons. Implement in other ticket
          <div className="footer-bottom-text">
            <span className="footer-company-name">
              {generalTitles.company_name}
            </span>
            <span className="footer-copyright">
              {footerData.copyright}
            </span>
          </div>
        </div>
        <div className="footer-section footer-right">
          <span className="footer-developers-title">
            {footerData.developers.title}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;