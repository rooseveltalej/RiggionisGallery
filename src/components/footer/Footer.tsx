import React from 'react';
import type { FooterProps } from './Footer.interface';
import { H1 } from '@/mini-components';
import { H2 } from '@/mini-components';
import {Paragraph} from '@/mini-components';
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
        {/* Company and Artist Section */}
        <div className="footer-section">
          <H1 className="footer-title">
            {generalTitles.companyName}
          </H1>
          <div className="artist-info">
            <Paragraph 
              className="artist-name" 
              color="var(--gray-100)"
              fontWeight="600"
            >
              {generalTitles.artist_info.name}
            </Paragraph>
            <Paragraph 
              className="artist-title" 
              color="var(--gray-200)"
            >
              {generalTitles.artist_info.grade}
            </Paragraph>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="footer-section">
          <H2 className="footer-h2">
            {footerData.sections.contact.title}
          </H2>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <H2 className="footer-h2">
            {footerData.sections.social_media.title}
          </H2>
        </div>

        {/* Developers Section */}
        <div className="footer-section">
          <H2 className="footer-h2">
            {footerData.sections.developers.title}
          </H2>
        </div>
      </div>
      
      <div className="footer-bottom">
        <Paragraph 
          color="var(--gray-300)"
          fontSize="0.85rem"
        >
          {footerData.copyright}
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;