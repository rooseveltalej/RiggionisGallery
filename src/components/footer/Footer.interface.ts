import type { HTMLAttributes } from 'react';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  companyName?: string;
  artistInfo?: {
    name: string;
    title: string;
  };
  year?: number;
}
