import React from "react";
import IconWrapper from "../mini-components/IconWrapper/IconWrapper";
import "../pages/Contact.css";

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <IconWrapper
        icon={() => (
          <img src="src/assets/icons/instagram.svg" alt="Instagram" />
        )}
      />
      <IconWrapper
        icon={() => <img src="src/assets/icons/facebook.svg" alt="Facebook" />}
      />
      <IconWrapper
        icon={() => <img src="src/assets/icons/linkedin.svg" alt="LinkedIn" />}
      />
    </div>
  );
};

export default SocialLinks;
