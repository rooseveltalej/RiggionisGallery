import "./Artist.css";
import type React from "react";
import { Spinner, Paragraph } from "@/mini-components";
import { useArtistRemoteConfig } from "@/hooks/useArtistRemoteConfig";

import {
  HeroSection,
  AcademicList,
  ExperienceList,
  CVButtons,
  type ContactConfig,
} from "@/components";

import SkillsList from "@/components/Skills/SkillsList";
import LanguagesList from "@/components/Languages/LanguagesList";

type CSSVars = React.CSSProperties & { [key: `--${string}`]: string | number };

export default function ArtistPage() {
  const {
    loading,
    profile,
    labels,
    values,
    whatsappMessages,
    pageStrings,
    error,
  } = useArtistRemoteConfig();

  if (loading) {
    return (
      <main className="page" style={{ display: "grid", placeItems: "center" }}>
        <Spinner />
      </main>
    );
  }

  if (error || !profile) {
    return (
      <main className="page">
        <Paragraph>{error ?? "Perfil no disponible."}</Paragraph>
      </main>
    );
  }

  const hasPhone =
    typeof values?.phone === "string" && values.phone.trim().length > 0;

  const contactHref = profile?.contact?.href ?? null;
  const contactCta =
    profile?.contact?.cta ?? pageStrings?.buttons?.contact ?? "Enviar mensaje";

  const waStyle: CSSVars = { "--primary-color": "var(--color-brand)" };

  let contact: ContactConfig | undefined;
  if (hasPhone) {
    contact = {
      type: "whatsapp",
      phone: values.phone!,
      cta: contactCta,
      style: waStyle,
      message: whatsappMessages?.artist_info ?? "Hola, me gustaría conocer más sobre la artista.",
      className: "btn-whatsapp",
    };
  } else if (contactHref) {
    contact = { type: "link", href: contactHref, cta: contactCta };
  } else {
    contact = { type: "button", cta: contactCta };
  }

  return (
    <main className="page">
      <HeroSection
        avatarUrl={profile?.avatarUrl}
        personName={profile?.personName || values?.name || ""}
        title={profile?.title || ""}
        labels={{ name: labels?.name, degree: labels?.degree }}
        fullName={profile?.fullName || profile?.personName || values?.name || "—"}
        degree={values?.degree || profile?.title || "—"}
        contact={contact}
      />

      <AcademicList
        title={pageStrings?.sections?.academic ?? "Preparación académica"}
        items={profile?.academic ?? []}
      />

      <ExperienceList
        title={pageStrings?.sections?.experience ?? "Experiencia"}
        items={profile?.experience ?? []}
      />

      <section className="section-skills">
        <div className="skills-grid">
          <SkillsList
            title={pageStrings?.sections?.skills ?? "Habilidades y Herramientas"}
            groups={profile?.skills ?? []}
          />

          <LanguagesList
            title={pageStrings?.sections?.languages ?? "Idiomas"}
            languages={profile?.languages ?? []}
          />
        </div>

        <CVButtons
          viewText={pageStrings?.buttons?.view_cv ?? "Ver CV"}
          downloadText={pageStrings?.buttons?.download_cv ?? "Descargar CV"}
          viewUrl={profile?.cv?.viewUrl || profile?.cv?.downloadUrl || undefined}
          downloadUrl={profile?.cv?.downloadUrl || profile?.cv?.viewUrl || undefined}
          downloadName={profile?.cv?.filename || "CV.pdf"}
          className="btn"
        />
      </section>
    </main>
  );
}
