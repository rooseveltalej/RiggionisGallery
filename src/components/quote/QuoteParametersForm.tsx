import { useState } from "react";
import type {
  QuoteFormCopy,
  QuotePriceHighlight,
  QuoteFormValues,
} from "./types";

interface QuoteParametersFormProps {
  copy: QuoteFormCopy;
  options: {
    techniques: string[];
    supports: string[];
    styles: string[];
  };
  priceHighlights: QuotePriceHighlight[];
  onChange?: (values: QuoteFormValues) => void;
}

const QuoteParametersForm = ({
  copy,
  options,
  priceHighlights,
  onChange,
}: QuoteParametersFormProps) => {
  const [technique, setTechnique] = useState("");
  const [support, setSupport] = useState("");
  const [style, setStyle] = useState("");

  const emitChange = (next: QuoteFormValues) => {
    if (onChange) {
      onChange(next);
    }
  };

  const handleTechniqueChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setTechnique(value);
    emitChange({
      technique: value,
      support,
      style,
    });
  };

  const handleSupportChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSupport(value);
    emitChange({
      technique,
      support: value,
      style,
    });
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setStyle(value);
    emitChange({
      technique,
      support,
      style: value,
    });
  };

  return (
    <div className="quote-page__form-panel">
      <p className="quote-page__eyebrow quote-page__eyebrow--muted">
        {copy.eyebrow}
      </p>
      <h2>{copy.title}</h2>
      <p className="quote-page__description">{copy.description}</p>

      <div className="quote-page__fields">
        <div className="quote-page__field">
          <label htmlFor="technique-select">{copy.inputs.technique.label}</label>
          <select
            id="technique-select"
            name="technique"
            value={technique}
            onChange={handleTechniqueChange}
          >
            <option value="" disabled>
              {copy.inputs.technique.placeholder}
            </option>
            {options.techniques.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="quote-page__field">
          <label htmlFor="support-select">{copy.inputs.support.label}</label>
          <select
            id="support-select"
            name="support"
            value={support}
            onChange={handleSupportChange}
          >
            <option value="" disabled>
              {copy.inputs.support.placeholder}
            </option>
            {options.supports.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="quote-page__field">
          <label htmlFor="style-select">{copy.inputs.style.label}</label>
          <select
            id="style-select"
            name="style"
            value={style}
            onChange={handleStyleChange}
          >
            <option value="" disabled>
              {copy.inputs.style.placeholder}
            </option>
            {options.styles.map((option) => (
              <option key={option} value={option}>
                {option}
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
  );
};

export default QuoteParametersForm;
