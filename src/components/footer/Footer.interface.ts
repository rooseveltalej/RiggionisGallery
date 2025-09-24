import type { HTMLAttributes, ReactNode } from 'react';

export interface ArtistInfo {
  name: string;
  title: string;
}

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  companyName?: string;
  artistInfo?: ArtistInfo;
  year?: number;

  contactContent?: ReactNode;
  socialContent?: ReactNode;
  developersContent?: ReactNode;
}