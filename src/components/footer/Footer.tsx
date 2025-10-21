import React from 'react';
import type { FooterProps } from './Footer.interface';
import './Footer.css';
import IconWrapper from '../../mini-components/IconWrapper/IconWrapper';

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
            {generalTitles.artist_info.values.name ?? 'Nombre del Artista'}
          </span>
          <span className="footer-artist-data">
            {generalTitles.artist_info.values.email1 ?? 'Email del Artista'}
          </span>
          <span className="footer-artist-data">
            {generalTitles.artist_info.values.phone ?? 'Teléfono del Artista'}
          </span>
        </div>
        <div className="footer-section footer-center">
          {/* TODO: here will be the social media icons. Implement in other ticket */}
          <div className="footer-bottom-text">
            <span className="footer-company-name">
              {generalTitles.company_name ?? 'Nombre de la Compañía'}
            </span>
            <span className="footer-copyright">
              {footerData.copyright ?? '© 2025 Nombre de la Compañía'}
            </span>
          </div>
        </div>
        <div className="footer-section footer-right">
          <span className="footer-developers-title arima">
              {footerData.developers.title ?? 'Desarrolladores'}
          </span>
            <div style={{ marginTop: '0.5rem' }} className="footer-developers-list">
            {footerData.developers.team?.map((dev, idx) => (
              <div key={dev.name + idx} className="footer-developer-item">
                  <span className="footer-developer-name small-text">{dev.name}</span>
                {dev.linkedin && dev.linkedin.trim() !== '' ? (
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="footer-linkedin-icon">
                      <IconWrapper icon="/icons/linkedinFooter.svg" size="1.7rem"/>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
