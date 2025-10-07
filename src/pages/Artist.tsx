import "./Artist.css";
import data from "./artistProfile.json"; 

function safe<T>(val: T | null | undefined, fallback: T): T {
  return val ?? fallback;
}

export default function App() {
  const profile = {
    personName: safe(data.personName, "Nombre del Artista"),
    fullName: safe(data.fullName, "Nombre Completo del Artista"),
    title: safe(data.title, "Especialidad"),
    degree: safe(data.degree, "Grado académico"),
    avatarUrl: data.avatarUrl,
    academic: Array.isArray(data.academic) ? data.academic : [],
    experience: Array.isArray(data.experience) ? data.experience : [],
    skills: Array.isArray(data.skills) ? data.skills : [],
    languages: Array.isArray(data.languages) ? data.languages : [],
    cv: data.cv || {},
    contact: data.contact || {},
  };

  return (
    <main className="page">
      {/* ====== 1. Hero ====== */}
      <section className="section-hero">
        <div className="hero-left">
          {profile.avatarUrl ? (
            <img className="avatar" src={profile.avatarUrl} alt="Retrato del artista" />
          ) : (
            <div className="avatar" aria-hidden="true" />
          )}
          <h2 className="person-name">{profile.personName}</h2>
        </div>

        <div className="hero-right">
          <h1 className="title">{profile.title}</h1>
          <p className="subtitle">
            Nombre: <strong>{profile.fullName}</strong>
            <br />
            Grado académico: {profile.degree}
          </p>

          {profile.contact?.href ? (
            <a className="btn" href={profile.contact.href}>
              {profile.contact.cta || "Enviar mensaje"}
            </a>
          ) : (
            <button className="btn" type="button">
              {profile.contact?.cta || "Enviar mensaje"}
            </button>
          )}
        </div>
      </section>

      {/* ====== 2. Preparación académica ====== */}
      <section className="section-academic">
        <h2 className="academic-title">Preparación académica</h2>
        <div className="academic-list">
          {profile.academic.map((it, idx) => (
            <div key={idx} className="academic-item">
              <h3>{safe(it.title, "Título")}</h3>
              <p>{safe(it.institution, "Institución")}</p>
              <p>{safe(it.year, "Año")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 3. Experiencia ====== */}
      <section className="section-experience">
        <h2 className="exp-title">Experiencia</h2>
        <div className="exp-list">
          {profile.experience.map((ex, idx) => (
            <article key={idx} className="exp-item">
              <h3 className="exp-heading">
                {safe(ex.heading, "Experiencia en …")} {" "}
                <span className="exp-years">({safe(ex.years, "Año - Año")})</span> :
              </h3>
              <p className="exp-desc">{safe(ex.description, "Descripción de la experiencia…")}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ====== 4. Habilidades / Idiomas + botones ====== */}
      <section className="section-skills">
        <div className="skills-grid">
          <div className="skills-col">
            <h2 className="skills-title">Habilidades y Herramientas</h2>
            {profile.skills.map((row, i) => (
              <ul key={i} className="skills-row">
                {row.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
            ))}
          </div>

          <div className="lang-col">
            <h2 className="skills-title">Idiomas</h2>
            <ul className="lang-list">
              {profile.languages.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skills-actions">
          <a
            className="btn"
            href={profile.cv?.viewUrl || profile.cv?.downloadUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver CV
          </a>

          <a
            className="btn"
            href={profile.cv?.downloadUrl || profile.cv?.viewUrl || "#"}
            download={profile.cv?.filename || "CV.pdf"}
          >
            Descargar CV
          </a>
        </div>
      </section>
    </main>
  );
}
