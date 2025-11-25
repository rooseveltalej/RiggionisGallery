interface QuotePreviewCardProps {
  eyebrow: string;
  displaySize: string;
  relation: string;
  orientationLabel: string;
  aspectRatio: string;
}

const QuotePreviewCard = ({
  eyebrow,
  displaySize,
  relation,
  orientationLabel,
  aspectRatio,
}: QuotePreviewCardProps) => (
  <div className="quote-page__preview">
    <p className="quote-page__eyebrow quote-page__eyebrow--muted">{eyebrow}</p>
    <div className="size-card size-card--preview">
      <div className="size-card__figure">
        <div className="size-card__art" style={{ aspectRatio }} />
        <span>{displaySize}</span>
      </div>
      <div className="size-card__meta">
        <span>{relation}</span>
        <span>{orientationLabel}</span>
      </div>
    </div>
  </div>
);

export default QuotePreviewCard;
