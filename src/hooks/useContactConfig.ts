import { useMemo } from "react";
import { buildContactConfig } from "@/utils/buildContactConfig";
import type { CSSVars } from "@/types/css";
import type { ContactConfig } from "@/components";

type Deps = {
  phone?: string | null;
  contactHref?: string | null;
  contactCta: string;
  waMessage?: string | null;
  className?: string;
  waStyle?: CSSVars;
};

export function useContactConfig({
  phone,
  contactHref,
  contactCta,
  waMessage,
  className = "btn-whatsapp",
  waStyle,
}: Deps): ContactConfig {
  return useMemo(
    () =>
      buildContactConfig({
        phone,
        contactHref,
        contactCta,
        waStyle,
        waMessage: waMessage ?? undefined,
        className,
      }),
    [
      phone,
      contactHref,
      contactCta,
      waMessage,
      waStyle
        ? (waStyle as Record<string, string | number>)["--primary-color"]
        : undefined,
    ],
  );
}
