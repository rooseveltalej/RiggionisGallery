import React from "react";
import "./Contact.css";
import Avatar from "../components/Avatar";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Avatar name="Your Name" imageUrl="/images/avatar.jpg" />
      <div className="contact-info">
        <ContactInfo phone="+1 (234) 567-8901" emails={["you@example.com"]} />
        <div className="social-links-container">
          <SocialLinks
            links={[
              { iconSrc: "/icons/twitter.svg", alt: "Twitter" },
              { iconSrc: "/icons/instagram.svg", alt: "Instagram" },
              { iconSrc: "/icons/facebook.svg", alt: "Facebook" },
            ]}
          />
          <WhatsAppButton text="Chat on WhatsApp" iconSrc="/icons/whatsapp.svg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
