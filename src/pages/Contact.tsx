import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="avatar">
        <div className="avatar-circle"></div>
        <p className="avatar-name">Mónica Riggioni</p>
      </div>

      <div className="contact-info">
        <h2>Información de contacto</h2>

        <div className="contact-item">
          <span className="contact-label">Teléfono:</span>
          <span className="contact-value">+506 0000 0000</span>
        </div>

        <div className="contact-item">
          <span className="contact-label">Correo 1:</span>
          <span className="contact-value">correo1@gmail.com</span>
        </div>

        <div className="contact-item">
          <span className="contact-label">Correo 2:</span>
          <span className="contact-value">correo2@gmail.com</span>
        </div>
        <div className="social-links">
          <span className="icon">📷</span>
          <span className="icon">📘</span>
          <span className="icon">🔗</span>
        </div>

        <button className="whatsapp-button">
          <span className="icon">💬</span>
          Enviar mensaje
        </button>
      </div>
    </div>
  );
};

export default Contact;
