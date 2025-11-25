import React from "react";
import IconWrapper from "@/mini-components/IconWrapper/IconWrapper";
import styles from "./SocialLinks.module.css";
import Image from "@/mini-components/Image/Image";

type SocialLink = {
  iconSrc: string;
  alt: string;
  href: string;
  label: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

type SocialLinksProps = {
  links: SocialLink[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const validLinks = links.filter(
    (link) => link.href && link.href.trim().length > 0
  );

  if (validLinks.length === 0) {
    return null;
  }

  return (
    <nav className={styles.socialLinks} aria-label="Enlaces de redes sociales">
      {links.map((link, index) => {
        const isExternal =
          link.target === "_blank" || link.href.startsWith("http");
        const defaultRel = isExternal ? "noopener noreferrer" : undefined;

        return (
          <a
            key={`${link.href}-${index}`}
            href={link.href}
            target={link.target || (isExternal ? "_blank" : "_self")}
            rel={link.rel || defaultRel}
            aria-label={link.label || link.alt}
            title={link.label || link.alt}
            className={styles.socialLink}
          >
            <IconWrapper icon={() => <Image src={link.iconSrc} alt="" />} />
          </a>
        );
      })}
    </nav>
  );
};

export default SocialLinks;
