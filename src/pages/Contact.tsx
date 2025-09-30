import React from "react";
import "./Contact.css";
import Avatar from "../components/Avatar";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Avatar />
      <div className="contact-info">
        <ContactInfo />
        <div className="social-links-container">
          <SocialLinks />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
};

export default Contact;
