import React from "react";
import "./Contact.css";
import Avatar from "../components/Avatar";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  AVATAR_NAME,
  AVATAR_IMAGE_URL,
  CONTACT_PHONE,
  CONTACT_EMAILS,
  SOCIAL_LINKS,
  WHATSAPP_BUTTON_TEXT,
  WHATSAPP_ICON_SRC,
} from "../utils/constants";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Avatar name={AVATAR_NAME} imageUrl={AVATAR_IMAGE_URL} />
      <div className="contact-info">
        <ContactInfo phone={CONTACT_PHONE} emails={CONTACT_EMAILS} />
        <div className="social-links-container">
          <SocialLinks links={SOCIAL_LINKS} />
          <WhatsAppButton
            text={WHATSAPP_BUTTON_TEXT}
            iconSrc={WHATSAPP_ICON_SRC}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
