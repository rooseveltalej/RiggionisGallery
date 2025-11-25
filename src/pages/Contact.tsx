import React from "react";
import "./Contact.css";
import Avatar from "../components/avatar";
import ContactInfo from "../components/contactInfo";
import SocialLinks from "../components/socialLinks";
import WhatsAppButton from "../components/whatsAppButton";
import { useContactData } from "../hooks";
import { useLanguage } from "../hooks";

const Contact: React.FC = () => {
  const { avatar, contact, social, whatsapp } = useContactData();
  const { languageStrings } = useLanguage();

  const contactLabels = {
    title: languageStrings?.contact_page?.title,
    phone: languageStrings?.general_titles?.labels?.phone,
    email: languageStrings?.general_titles?.labels?.email,
    emailMultiple: languageStrings?.general_titles?.labels?.email_multiple,
  };

  const whatsappText =
    languageStrings?.general_titles?.whatsapp_button_texts?.contact ||
    whatsapp.text;

  return (
    <div className="contact-page">
      <Avatar name={avatar.name} imageUrl={avatar.imageUrl} />
      <div className="contact-info">
        <ContactInfo
          phone={contact.phone}
          emails={contact.emails}
          labels={contactLabels}
        />
        <div className="social-links-container">
          <SocialLinks links={social} />
          <WhatsAppButton
            phoneNumber={whatsapp.phoneNumber}
            text={whatsappText}
            iconSrc={whatsapp.iconSrc}
            message={whatsapp.message}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
