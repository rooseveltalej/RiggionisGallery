interface QuoteSizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
  formatSize: (size: string) => string;
}

const QuoteSizeSelector = ({
  sizes,
  selectedSize,
  onSelect,
  formatSize,
}: QuoteSizeSelectorProps) => {
  if (!sizes.length) {
    return null;
  }

  return (
    <div className="size-button-group">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          className={`size-button${selectedSize === size ? " is-active" : ""}`}
          onClick={() => onSelect(size)}
        >
          {formatSize(size)}
        </button>
      ))}
    </div>
  );
};

export default QuoteSizeSelector;
