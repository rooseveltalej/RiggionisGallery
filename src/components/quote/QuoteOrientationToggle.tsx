import type { QuoteOrientation } from "./types";

interface QuoteOrientationToggleProps {
  orientation: QuoteOrientation;
  labels: Record<QuoteOrientation, string>;
  onChange: (orientation: QuoteOrientation) => void;
}

const QuoteOrientationToggle = ({
  orientation,
  labels,
  onChange,
}: QuoteOrientationToggleProps) => (
  <div className="orientation-toggle">
    {(["horizontal", "vertical"] as QuoteOrientation[]).map((value) => (
      <button
        key={value}
        type="button"
        className={`orientation-toggle__button${
          orientation === value ? " is-active" : ""
        }`}
        onClick={() => onChange(value)}
      >
        {labels[value]}
      </button>
    ))}
  </div>
);

export default QuoteOrientationToggle;
