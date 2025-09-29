export interface GeneralTitlesForFooter {
  companyName: string;
  artist_info: {
    name: string;
    grade: string;
  };
}

export interface FooterData {
  sections: {
    contact: {
      title: string;
    };
    social_media: {
      title: string;
    };
    developers: {
      title: string;
    };
  };
  copyright: string;
}
