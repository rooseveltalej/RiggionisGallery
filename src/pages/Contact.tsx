import React from "react";
import "./Contact.css";
import Avatar from "../components/Avatar";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import WhatsAppButton from "../components/WhatsAppButton";
import { useContactData } from "../hooks";

const Contact: React.FC = () => {
  const { avatar, contact, social, whatsapp } = useContactData();

  return (
    <div className="contact-page">
      <Avatar name={avatar.name} imageUrl={avatar.imageUrl} />
      <div className="contact-info">
        <ContactInfo phone={contact.phone} emails={contact.emails} />
        <div className="social-links-container">
          <SocialLinks links={social} />
          <WhatsAppButton
            phoneNumber={whatsapp.phoneNumber}
            text={whatsapp.text}
            iconSrc={whatsapp.iconSrc}
            message={whatsapp.message}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
