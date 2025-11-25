export interface GeneralTitlesForFooter {
  company_name: string;
  artist_info: {
    labels: {
      name: string;
      degree: string;
      phone: string;
      email1: string;
      email2: string;
    };
    values: {
      name: string;
      degree: string;
      phone: string;
      email1: string;
      email2: string;
    };
    social_media: {
      instagram: string;
      facebook: string;
      linkedin: string;
    };
  };
  whatsapp_messages: {
    contact_general: string;
    quote_request: string;
    artist_info: string;
  };
}

export interface Developer {
  name: string;
  linkedin?: string;
}

export interface FooterData {
  developers: {
    title: string;
    team: Developer[];
  };
  copyright: string;
}
