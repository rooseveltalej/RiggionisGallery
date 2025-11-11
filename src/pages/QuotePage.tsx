import "./Quote.css";

const stackedSizes = [
  { label: "30×30 cm", ratio: "1 / 1", position: { column: "1 / 2", row: "1 / 2" } },
  { label: "50×40 cm", ratio: "5 / 4", position: { column: "1 / 2", row: "2 / 3" } },
  { label: "40×100 cm", ratio: "2 / 5", position: { column: "1 / 2", row: "3 / 4" } },
];

const mosaicTop = {
  label: "80×60 cm",
  ratio: "4 / 3",
  position: { column: "2 / 3", row: "1 / 3" },
};

const mosaicBottom = [
  { label: "60×120 cm", ratio: "1 / 2" },
  { label: "70×50 cm", ratio: "7 / 5" },
];

const heroSize = {
  label: "120×80 cm",
  ratio: "3 / 2",
  position: { column: "3 / 4", row: "1 / 4" },
};

const techniqueOptions = ["Óleo", "Acrílico", "Mixta", "Acuarela"];
const supportOptions = ["Lienzo", "Papel de algodón", "Madera", "Metal"];
const styleOptions = ["Abstracto", "Figurativo", "Minimalista", "Paisaje"];

const priceHighlights = [
  { label: "Precio mínimo", value: "$1,200 USD", tone: "min" },
  { label: "Precio estimado", value: "$1,850 USD", tone: "avg" },
  { label: "Precio máximo", value: "$2,600 USD", tone: "max" },
];

const QuotePage: React.FC = () => {
  return (
    <section className="quote-page">
      <div className="quote-page__wrapper">
        <div className="quote-page__sizes-panel">
          <p className="quote-page__eyebrow">Cotizar Obra</p>
          <h1>Seleccione el tamaño</h1>
          <p className="quote-page__description">
            Explore formatos sugeridos para la obra. Cada bloque representa una proporción
            distinta para ayudarle a visualizar el espacio que ocupará la pieza en sala.
          </p>

          <div className="quote-page__sizes-grid">
            {[...stackedSizes, mosaicTop, heroSize].map((size) => (
              <div
                key={size.label}
                className={`size-card${
                  size === heroSize ? " size-card--hero" : ""
                }`}
                style={{
                  gridColumn: size.position.column,
                  gridRow: size.position.row,
                }}
              >
                <div
                  className="size-card__figure"
                  style={{ aspectRatio: size.ratio }}
                >
                  <span>{size.label}</span>
                </div>
              </div>
            ))}

            <div
              className="size-card size-card--split"
              style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}
            >
              <div className="size-card__split-grid">
                {mosaicBottom.map((size) => (
                  <div
                    key={size.label}
                    className="size-card__figure"
                    style={{ aspectRatio: size.ratio }}
                  >
                    <span>{size.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="quote-page__form-panel">
          <p className="quote-page__eyebrow quote-page__eyebrow--muted">Parámetros</p>
          <h2>Curar la técnica y estilo</h2>
          <p className="quote-page__description">
            Seleccione la técnica, soporte y estética deseada para ofrecerle un rango de valores
            acorde a su solicitud.
          </p>

          <div className="quote-page__fields">
            <div className="quote-page__field">
              <label htmlFor="technique-select">Técnica</label>
              <select id="technique-select" name="technique" defaultValue="">
                <option value="" disabled>
                  Seleccione una técnica
                </option>
                {techniqueOptions.map((technique) => (
                  <option key={technique} value={technique}>
                    {technique}
                  </option>
                ))}
              </select>
            </div>

            <div className="quote-page__field">
              <label htmlFor="support-select">Soporte</label>
              <select id="support-select" name="support" defaultValue="">
                <option value="" disabled>
                  Seleccione un soporte
                </option>
                {supportOptions.map((support) => (
                  <option key={support} value={support}>
                    {support}
                  </option>
                ))}
              </select>
            </div>

            <div className="quote-page__field">
              <label htmlFor="style-select">Estilo</label>
              <select id="style-select" name="style" defaultValue="">
                <option value="" disabled>
                  Seleccione un estilo
                </option>
                {styleOptions.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="quote-page__prices">
            {priceHighlights.map((price) => (
              <div
                key={price.label}
                className={`price-row price-row--${price.tone}`}
              >
                <span>{price.label}</span>
                <strong>{price.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotePage;
