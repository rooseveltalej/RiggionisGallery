import React from "react";
import "./Contact.css";
import { H1 } from "../mini-components/h1/H1";
import { H2 } from "../mini-components/h2/H2";
import { H3 } from "../mini-components/h3/H3";
import IconWrapper from "../mini-components/IconWrapper/IconWrapper";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="avatar">
        <div className="avatar-circle"></div>
        <H1 className="avatar-name">Mónica Riggioni</H1>
      </div>

      <div className="contact-info">
        <H2>Información de contacto</H2>

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
            <IconWrapper icon={() => <span>📷</span>} />
            <IconWrapper icon={() => <span>📘</span>} />
            <IconWrapper icon={() => <span>🔗</span>} />
          </div>

          <button className="whatsapp-button">
            <IconWrapper icon={() => <span>💬</span>} />
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
