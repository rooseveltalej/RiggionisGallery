import React from "react";
import { H1, Avatar, Button, LinkButton, WhatsAppButton } from "@/mini-components";
import type { HeroSectionProps } from "./HeroSection.interface";
import "./HeroSection.css";

const HeroSection: React.FC<HeroSectionProps> = ({
  avatarUrl,
  personName,
  title,
  labels,
  fullName,
  degree,
  contact,
}) => {
  return (
    <section
      className="section-hero"
      aria-label={`Presentación de ${personName ?? "la artista"}`}
    >
      <div className="hero-left">
        <Avatar
          src={avatarUrl ?? undefined}
          alt={`Avatar de ${personName ?? "artista"}`}
          size="var(--avatar-size-lg)"
        />
        <span className="person-name">{personName ?? ""}</span>
      </div>

      <div className="hero-right">
        <H1 className="title">{title ?? ""}</H1>

        <span className="subtitle" style={{ color: "var(--color-muted)" }}>
          {labels?.name} <strong>{fullName ?? personName ?? "—"}</strong>
          <br />
          {labels?.degree} {degree ?? "—"}
        </span>

        {contact?.type === "whatsapp" ? (
          <WhatsAppButton
            text={contact.cta}
            phoneNumber={contact.phone}
            message={
              contact.message ?? "Hola, me gustaría conocer más sobre la artista."
            }
            className={contact.className ?? "btn-whatsapp"}
            style={contact.style}
          />
        ) : contact?.type === "link" ? (
          <LinkButton
            text={contact.cta}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
          />
        ) : contact?.type === "button" ? (
          <Button text={contact.cta} className={contact.className} />
        ) : null}
      </div>
    </section>
  );
};

export default HeroSection;
