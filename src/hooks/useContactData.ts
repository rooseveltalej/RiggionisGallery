import { useMemo } from "react";
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

/**
 * Hook personalizado para obtener los datos de contacto.
 *
 * Actualmente obtiene los datos desde constantes estáticas,
 * pero puede ser modificado fácilmente para:
 * - Obtener datos desde una API REST
 * - Obtener datos desde Firebase Remote Config
 * - Obtener datos desde un CMS (Contentful, Strapi, etc.)
 * - Obtener datos desde Context/Redux
 *
 * El componente que usa este hook no necesita saber de dónde vienen los datos.
 *
 * @returns {ContactPageData} Datos estructurados para la página de contacto
 */
export const useContactData = (): ContactPageData => {
  // Usar useMemo para evitar recalcular en cada render
  const contactData = useMemo<ContactPageData>(() => {
    // TODO: En el futuro, aquí se puede llamar a una API, Firebase, CMS, etc.
    // Ejemplo:
    // const response = await fetch('/api/contact-data');
    // const data = await response.json();

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
  }, []); // Array vacío = solo se calcula una vez al montar el componente

  return contactData;
};

// Hook alternativo para casos de uso asíncrono (API, Firebase, etc.)
// Descomentar y adaptar cuando se necesite:
/*
import { useState, useEffect } from "react";

export const useContactDataAsync = () => {
  const [data, setData] = useState<ContactPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        // Ejemplo: obtener desde API
        // const response = await fetch('/api/contact-data');
        // const apiData = await response.json();
        
        // Ejemplo: obtener desde Firebase Remote Config
        // const remoteConfig = getRemoteConfig();
        // await fetchAndActivate(remoteConfig);
        // const apiData = getValue(remoteConfig, 'contact_data');
        
        // Por ahora, usar datos estáticos
        const contactData: ContactPageData = {
          avatar: {
            name: AVATAR_NAME,
            imageUrl: AVATAR_IMAGE_URL,
          },
          contact: {
            phone: CONTACT_PHONE,
            emails: CONTACT_EMAILS,
          },
          social: SOCIAL_LINKS.map((link) => ({
            iconSrc: link.iconSrc,
            alt: link.alt,
            href: link.href || "#",
            label: link.label || link.alt,
            target: "_blank" as const,
          })),
          whatsapp: {
            phoneNumber: CONTACT_PHONE,
            text: WHATSAPP_BUTTON_TEXT,
            iconSrc: WHATSAPP_ICON_SRC,
          },
        };
        
        setData(contactData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return { data, loading, error };
};
*/
