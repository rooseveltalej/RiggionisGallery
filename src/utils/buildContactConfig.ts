import type { ContactConfig } from "@/components";

type BuildArgs = {
  phone?: string | null;
  contactHref?: string | null;
  contactCta: string;
  waStyle?: Record<string, string | number>;
  waMessage?: string;
  className?: string;
};

export function buildContactConfig({
  phone,
  contactHref,
  contactCta,
  waStyle,
  waMessage = "Hola, me gustaría conocer más sobre la artista.",
  className = "btn-whatsapp",
}: BuildArgs): ContactConfig {
  const hasPhone = typeof phone === "string" && phone.trim().length > 0;

  if (hasPhone) {
    return {
      type: "whatsapp",
      phone: phone!.trim(),
      cta: contactCta,
      style: waStyle,
      message: waMessage,
      className,
    };
  }

  if (contactHref && contactHref.trim().length > 0) {
    return { type: "link", href: contactHref, cta: contactCta };
  }

  return { type: "button", cta: contactCta };
}
