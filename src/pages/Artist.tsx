import "./Artist.css";
import { Spinner } from "@/mini-components";
import { useArtistRemoteConfig } from "@/hooks/useArtistRemoteConfig";
import { useContactConfig } from "@/hooks/useContactConfig";
import { useLanguage } from "@/hooks";
import type { CSSVars } from "@/types/css";

import {
  HeroSection,
  AcademicList,
  ExperienceList,
  CVButtons,
  SkillsList,
  LanguagesList,
} from "@/components";

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
  
  const { languageStrings } = useLanguage();

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
        <span>{error ?? "Perfil no disponible."}</span>
      </main>
    );
  }

  const waStyle: CSSVars = { "--primary-color": "var(--color-brand)" };

  const artistPhotoUrl = languageStrings?.general_titles?.artist_info?.artist_photo_url || profile?.avatarUrl;

  const contact = useContactConfig({
    phone: values?.phone ?? null,
    contactHref: profile?.contact?.href ?? null,
    contactCta:
      profile?.contact?.cta ??
      pageStrings?.buttons?.contact ??
      "Enviar mensaje",
    waMessage: whatsappMessages?.artist_info ?? undefined,
    className: "btn-whatsapp",
    waStyle,
  });

  return (
    <main className="page">
      <HeroSection
        avatarUrl={artistPhotoUrl}
        personName={profile?.personName || values?.name || ""}
        title={profile?.title || ""}
        labels={{ name: labels?.name, degree: labels?.degree }}
        fullName={
          profile?.fullName || profile?.personName || values?.name || "—"
        }
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
        <div className="skills-grid" />
        <div className="skills-grid">
          <SkillsList
            title={
              pageStrings?.sections?.skills ?? "Habilidades y Herramientas"
            }
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
          viewUrl={
            profile?.cv?.viewUrl || profile?.cv?.downloadUrl || undefined
          }
          downloadUrl={
            profile?.cv?.downloadUrl || profile?.cv?.viewUrl || undefined
          }
          downloadName={profile?.cv?.filename || "CV.pdf"}
          className="btn"
        />
      </section>
    </main>
  );
}
