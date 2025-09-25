import type { HTMLAttributes, ReactNode } from 'react';

export interface ArtistInfo {
  name: string;
  title: string;
}

// TODO: In future tickets, these sections will be required and not optional.
export interface FooterSections {
  contactContent?: ReactNode;
  socialContent?: ReactNode;
  developersContent?: ReactNode;
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  companyName: string;
  artistContent?: ReactNode;
  year?: number;
  sections?: FooterSections;
}