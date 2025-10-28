import type React from "react";

export type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number };

export type ContactConfig =
  | { type: "whatsapp"; phone: string; cta: string; style?: CSSVars; message?: string; className?: string }
  | { type: "link"; href: string; cta: string; className?: string }
  | { type: "button"; cta: string; className?: string };

export interface HeroSectionProps {
  avatarUrl?: string | null;
  personName?: string | null;
  title?: string | null;
  labels?: { name?: string; degree?: string };
  fullName?: string | null;
  degree?: string | null;
  contact?: ContactConfig;
}
