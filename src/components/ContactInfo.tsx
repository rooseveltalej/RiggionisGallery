import React from "react";

import { H1 } from "../mini-components/h1/H1";
import { H3 } from "../mini-components/h3/H3";

import "../pages/Contact.css";

const ContactInfo: React.FC = () => {
  return (
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
    </div>
  );
};

export default ContactInfo;
