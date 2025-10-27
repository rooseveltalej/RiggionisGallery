import {
  AVATAR_NAME,
  AVATAR_IMAGE_URL,
  CONTACT_PHONE,
  CONTACT_EMAILS,
  SOCIAL_LINKS,
  WHATSAPP_BUTTON_TEXT,
  WHATSAPP_ICON_SRC,
} from "../utils/constants";

export type AvatarData = {
  name: string;
  imageUrl?: string;
};

export type ContactData = {
  phone: string;
  emails: string[];
};

export type SocialLinkData = {
  iconSrc: string;
  alt: string;
  href: string;
  label: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export type WhatsAppData = {
  phoneNumber: string;
  message?: string;
  text?: string;
  iconSrc?: string;
};

export type ContactPageData = {
  avatar: AvatarData;
  contact: ContactData;
  social: SocialLinkData[];
  whatsapp: WhatsAppData;
};

export const useContactData = (): ContactPageData => {
  return {
    avatar: {
      name: AVATAR_NAME,
      imageUrl: AVATAR_IMAGE_URL,
    },
    contact: {
      phone: CONTACT_PHONE,
      emails: CONTACT_EMAILS,
    },
    social: SOCIAL_LINKS.map((link) => ({
      ...link,
      target: "_blank" as const,
    })),
    whatsapp: {
      phoneNumber: CONTACT_PHONE,
      text: WHATSAPP_BUTTON_TEXT,
      iconSrc: WHATSAPP_ICON_SRC,
    },
  };
};
