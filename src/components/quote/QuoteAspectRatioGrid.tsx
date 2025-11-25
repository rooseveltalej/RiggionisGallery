import type { QuoteAspectRatioOption } from "./types";

interface QuoteAspectRatioGridProps {
  options: QuoteAspectRatioOption[];
  selectedRelation: string;
  onSelect: (option: QuoteAspectRatioOption) => void;
  sizeCountSuffix: string;
}

const QuoteAspectRatioGrid = ({
  options,
  selectedRelation,
  onSelect,
  sizeCountSuffix,
}: QuoteAspectRatioGridProps) => {
  if (!options.length) {
    return null;
  }

  return (
    <div className="ratio-grid">
      {options.map((option) => (
        <button
          key={option.relation}
          type="button"
          className={`ratio-card${
            option.relation === selectedRelation ? " is-active" : ""
          }`}
          onClick={() => onSelect(option)}
        >
          <span className="ratio-card__ratio">{option.relation}</span>
          <span className="ratio-card__sizes">
            {option.sizes.length} {sizeCountSuffix}
          </span>
        </button>
      ))}
    </div>
  );
};

export default QuoteAspectRatioGrid;
