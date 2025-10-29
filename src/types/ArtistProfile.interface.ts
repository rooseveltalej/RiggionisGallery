export interface AcademicItem {
  title: string;
  institution: string;
  year: string;
}

export interface ExperienceItem {
  heading: string;
  years: string;
  description: string;
}

export interface CVInfo {
  viewUrl?: string;
  downloadUrl?: string;
  filename?: string;
}

export interface ArtistContact {
  href?: string;
  cta?: string;
}

export interface ArtistProfile {
  personName: string;
  fullName: string;
  title: string;
  avatarUrl?: string;

  academic: AcademicItem[];
  experience: ExperienceItem[];

  skills: string[][];
  languages: string[];

  cv?: CVInfo;
  contact?: ArtistContact;
}
