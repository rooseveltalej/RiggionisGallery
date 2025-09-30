import React from "react";
import "./Contact.css";
import { H1 } from "../mini-components/h1/H1";
import { H2 } from "../mini-components/h2/H2";
import { H3 } from "../mini-components/h3/H3";
import IconWrapper from "../mini-components/IconWrapper/IconWrapper";
import Button from "../mini-components/Button/Button";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="avatar">
        <div className="avatar-circle"></div>
        <H2 className="avatar-name">Mónica Riggioni</H2>
      </div>

      <div className="contact-info">
        <H1>Información de contacto</H1>

        <div className="contact-item">
          <H3 className="contact-label">Teléfono:</H3>
          <H3 className="contact-value">+506 0000 0000</H3>
        </div>

        <div className="contact-item">
          <H3 className="contact-label">Correo 1:</H3>
          <H3 className="contact-value">correo1@gmail.com</H3>
        </div>

        <div className="contact-item">
          <H3 className="contact-label">Correo 2:</H3>
          <H3 className="contact-value">correo2@gmail.com</H3>
        </div>
        <div className="social-links-container">
          <div className="social-links">
            <IconWrapper
              icon={() => (
                <img src="src/assets/icons/instagram.svg" alt="Instagram" />
              )}
            />
            <IconWrapper
              icon={() => (
                <img src="src/assets/icons/facebook.svg" alt="Facebook" />
              )}
            />
            <IconWrapper
              icon={() => (
                <img src="src/assets/icons/linkedin.svg" alt="LinkedIn" />
              )}
            />
          </div>

          <Button
            className="whatsapp-button"
            text="Enviar mensaje"
            icon={<img src="src/assets/icons/whatsapp.svg" alt="WhatsApp" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
