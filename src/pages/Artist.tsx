import "./Artist.css";
import {
  Spinner,
  WhatsAppButton,
  H1,
  H2,
  H3,
  Image,
  Paragraph,
  Button,
  LinkButton,
} from "@/mini-components";
import { useArtistRemoteConfig } from "@/hooks/useArtistRemoteConfig";

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

  return (
    <main className="page">
      {/* ====== 1. Hero ====== */}
      <section className="section-hero">
        <div className="hero-left">
          {profile?.avatarUrl ? (
            <Image
              className="avatar"
              src={profile.avatarUrl}
              alt="Retrato del artista"
            />
          ) : (
            <div className="avatar" aria-hidden="true" />
          )}
          <H3 className="person-name">
            {profile?.personName || values?.name || ""}
          </H3>
        </div>

        <div className="hero-right">
          <H1 className="title">{profile?.title || ""}</H1>

          <Paragraph className="subtitle" color="var(--color-muted)">
            {labels?.name}{" "}
            <strong>
              {profile?.fullName || profile?.personName || values?.name || "—"}
            </strong>
            <br />
            {labels?.degree} {values?.degree || profile?.title || "—"}
            {(values?.email1 || values?.phone) && (
              <>
                <br />
                {values?.email1 && (
                  <>
                    {labels?.email1} {values.email1}
                    <br />
                  </>
                )}
                {values?.phone && (
                  <>
                    {labels?.phone} {values.phone}
                  </>
                )}
              </>
            )}
          </Paragraph>

          {hasPhone ? (
            <WhatsAppButton
              text={contactCta}
              phoneNumber={values.phone}
              message={
                whatsappMessages?.artist_info ??
                "Hola, me gustaría conocer más sobre la artista."
              }
              className="whatsapp-button"
              style={waStyle}
            />
          ) : contactHref ? (
            <LinkButton
              text={contactCta}
              href={contactHref}
              target="_blank"
              rel="noopener noreferrer"
            />
          ) : (
            <Button text={contactCta} />
          )}
        </div>
      </section>

      {/* ====== 2. Preparación académica ====== */}
      <section className="section-academic">
        <H2 className="academic-title">
          {pageStrings?.sections?.academic ?? "Preparación académica"}
        </H2>
        <div className="academic-list">
          {profile?.academic?.map((it, idx) => (
            <div key={idx} className="academic-item">
              <H3>{it.title}</H3>
              <Paragraph color="var(--color-muted)">{it.institution}</Paragraph>
              <Paragraph color="var(--color-muted)">{it.year}</Paragraph>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 3. Experiencia ====== */}
      <section className="section-experience">
        <H2 className="exp-title">
          {pageStrings?.sections?.experience ?? "Experiencia"}
        </H2>
        <div className="exp-list">
          {profile?.experience?.map((ex, idx) => (
            <article key={idx} className="exp-item">
              <H3 className="exp-heading">
                {ex.heading} <span className="exp-years">({ex.years})</span> :
              </H3>
              <Paragraph className="exp-desc">{ex.description}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      {/* ====== 4. Habilidades / Idiomas + botones ====== */}
      <section className="section-skills">
        <div className="skills-grid">
          <div className="skills-col">
            <H2 className="skills-title">
              {pageStrings?.sections?.skills ?? "Habilidades y Herramientas"}
            </H2>
            {profile?.skills?.map((row, i) => (
              <ul key={i} className="skills-row">
                {row.map((s, j) => (
                  <li key={j}>
                    <Paragraph>{s}</Paragraph>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="lang-col">
            <H2 className="skills-title">
              {pageStrings?.sections?.languages ?? "Idiomas"}
            </H2>
            <ul className="lang-list">
              {profile?.languages?.map((l, i) => (
                <li key={i}>
                  <Paragraph>{l}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skills-actions">
          <LinkButton
            text={pageStrings?.buttons?.view_cv ?? "Ver CV"}
            href={profile?.cv?.viewUrl || profile?.cv?.downloadUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
          />

          <LinkButton
            text={pageStrings?.buttons?.download_cv ?? "Descargar CV"}
            href={profile?.cv?.downloadUrl || profile?.cv?.viewUrl || "#"}
            download={profile?.cv?.filename || "CV.pdf"}
          />
        </div>
      </section>
    </main>
  );
}
