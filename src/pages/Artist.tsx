import "./Artist.css";

export default function App() {
  return (
    <main className="page">
      {/* ====== 1. Hero ====== */}
      <section className="section-hero">
        <div className="hero-left">
          <div className="avatar" aria-hidden="true" />
          <h2 className="person-name">Mónica Riggioni</h2>
        </div>

        <div className="hero-right">
          <h1 className="title">Diseño Pictórico</h1>
          <p className="subtitle">
            Nombre: <strong>Mónica María Riggioni Esquivel</strong><br />
            Grado académico: Bach. y Lic. en Diseño Plástico énf. Diseño Pictórico
          </p>
          <button className="btn" type="button">Enviar mensaje</button>
        </div>
      </section>

      {/* ====== 2. Preparación académica ====== */}
      <section className="section-academic">
        <h2 className="academic-title">Preparación académica</h2>
        <div className="academic-list">
          <div className="academic-item"><h3>Título</h3><p>Institución</p><p>Año</p></div>
          <div className="academic-item"><h3>Título</h3><p>Institución</p><p>Año</p></div>
          <div className="academic-item"><h3>Título</h3><p>Institución</p><p>Año</p></div>
        </div>
      </section>

      {/* ====== 3. Experiencia ====== */}
      <section className="section-experience">
        <h2 className="exp-title">Experiencia</h2>
        <div className="exp-list">
          <article className="exp-item">
            <h3 className="exp-heading">Experiencia en ... <span className="exp-years">(Año - Año)</span> :</h3>
            <p className="exp-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </article>
          <article className="exp-item">
            <h3 className="exp-heading">Experiencia en ... <span className="exp-years">(Año - Año)</span> :</h3>
            <p className="exp-desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
            </p>
          </article>
          <article className="exp-item">
            <h3 className="exp-heading">Experiencia en ... <span className="exp-years">(Año - Año)</span> :</h3>
            <p className="exp-desc">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
            </p>
          </article>
          <article className="exp-item">
            <h3 className="exp-heading">Experiencia en ... <span className="exp-years">(Año - Año)</span> :</h3>
            <p className="exp-desc">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
      </section>

      {/* ====== 4. Habilidades / Idiomas + botones ====== */}
      <section className="section-skills">
        <div className="skills-grid">
          <div className="skills-col">
            <h2 className="skills-title">Habilidades y Herramientas</h2>
            <ul className="skills-row">
              <li>Habilidad</li><li>Habilidad</li><li>Habilidad</li><li>Habilidad</li>
            </ul>
            <ul className="skills-row">
              <li>Habilidad</li><li>Habilidad</li><li>Habilidad</li><li>Habilidad</li><li>Habilidad</li>
            </ul>
          </div>

          <div className="lang-col">
            <h2 className="skills-title">Idiomas</h2>
            <ul className="lang-list">
              <li>Idioma</li>
              <li>Idioma</li>
            </ul>
          </div>
        </div>

        <div className="skills-actions">
          <button className="btn">Ver CV</button>
          <button className="btn">Descargar CV</button>
        </div>
      </section>
    </main>
  );
}
