import React from "react";
import IconWrapper from "../mini-components/IconWrapper/IconWrapper";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  links: { iconSrc: string; alt: string }[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className={styles["social-links"]}>
      {links.map((link, index) => (
        <IconWrapper
          key={index}
          icon={() => <img src={link.iconSrc} alt={link.alt} />}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
