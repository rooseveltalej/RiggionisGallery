import React from "react";
import type { FooterProps } from "./Footer.interface";
import "./Footer.css";
import { IconWrapper, WhatsAppButton } from "@/mini-components";
import IconLinkedin from "@/assets/icons/linkedinFooter.svg";

const Footer: React.FC<FooterProps> = ({
  generalTitles,
  footerData,
  className = "",
  ...rest
}) => {
  return (
    <footer
      className={`footer ${className}`.trim()}
      role="contentinfo"
      {...rest}
    >
      <div className="footer-content">
        <div className="footer-section footer-left">
          <span className="footer-artist-name">
            {generalTitles.artist_info.values.name}
          </span>
          <span className="footer-artist-data">
            {generalTitles.artist_info.values.email1}
          </span>
          <span className="footer-artist-data">
            {generalTitles.artist_info.values.phone}
          </span>
          <WhatsAppButton
            text={
              generalTitles.whatsapp_button_texts?.send_message ||
              "¡Enviar Mensaje!"
            }
            phoneNumber={
              generalTitles.artist_info.values.phone ?? "+50600000000"
            }
            message={
              generalTitles.whatsapp_messages.contact_general ??
              "Mensaje de Contacto General."
            }
          />
        </div>
        <div className="footer-section footer-center">
          {/* TODO: here will be the social media icons. Implement in other ticket */}
          <div className="footer-bottom-text">
            <span className="footer-company-name">
              {generalTitles.company_name}
            </span>
            <span className="footer-copyright">{footerData.copyright}</span>
          </div>
        </div>
        <div className="footer-section footer-right">
          <span className="footer-developers-title arima">
            {footerData.developers.title}
          </span>
          <div className="footer-developers-list">
            {footerData.developers.team.map((dev, idx) => (
              <div key={`${dev.name}-${idx}`} className="footer-developer-item">
                <span className="footer-developer-name small-text">
                  {dev.name}
                </span>
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-linkedin-icon"
                    aria-label={`LinkedIn de ${dev.name}`}
                  >
                    <IconWrapper icon={IconLinkedin} size="1.7rem" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
