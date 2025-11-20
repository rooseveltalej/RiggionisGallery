import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/hooks";
import QuoteAspectRatioGrid from "@/components/quote/QuoteAspectRatioGrid";
import QuoteOrientationToggle from "@/components/quote/QuoteOrientationToggle";
import QuoteSizeSelector from "@/components/quote/QuoteSizeSelector";
import QuotePreviewCard from "@/components/quote/QuotePreviewCard";
import QuoteParametersForm from "@/components/quote/QuoteParametersForm";
import type {
  QuoteOrientation,
  QuotePageContent,
  QuotePriceHighlight,
  QuotePriceTone,
} from "@/components/quote/types";
import "./Quote.css";

const PRICE_TONES: QuotePriceTone[] = ["min", "avg", "max"];

const parseSizeArea = (size: string): number | null => {
  const [width, height] = size.split("x").map(Number);
  if (!width || !height) {
    return null;
  }
  return width * height;
};

const formatSizeForOrientation = (
  size: string,
  orientation: QuoteOrientation,
  lockOrientation: boolean
) => {
  if (lockOrientation || orientation === "horizontal") {
    return size;
  }

  const [width, height] = size.split("x");
  if (!width || !height) {
    return size;
  }

  return `${height}x${width}`;
};

const getPreferredOrientation = (relation: string): QuoteOrientation => {
  const [width, height] = relation.split(":").map(Number);
  if (!width || !height) {
    return "horizontal";
  }
  return width >= height ? "horizontal" : "vertical";
};

const QuotePage = () => {
  const { language, languageStrings, loading } = useLanguage();
  const quoteContent = languageStrings?.quote_page as QuotePageContent | undefined;
  const aspectRatioOptions = quoteContent?.options?.aspect_ratios ?? [];

  const [selectedRelation, setSelectedRelation] = useState("");
  const [orientation, setOrientation] = useState<QuoteOrientation>("horizontal");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (!aspectRatioOptions.length) {
      setSelectedRelation("");
      setSelectedSize("");
      return;
    }

    const currentOption =
      aspectRatioOptions.find((option) => option.relation === selectedRelation) ??
      aspectRatioOptions[0];

    if (currentOption.relation !== selectedRelation) {
      setSelectedRelation(currentOption.relation);
      setSelectedSize(currentOption.sizes[0] ?? "");
      return;
    }

    if (currentOption.sizes.length === 0) {
      setSelectedSize("");
      return;
    }

    if (!currentOption.sizes.includes(selectedSize)) {
      setSelectedSize(currentOption.sizes[0] ?? "");
    }
  }, [aspectRatioOptions, selectedRelation, selectedSize]);

  const selectedOption = useMemo(
    () =>
      aspectRatioOptions.find((option) => option.relation === selectedRelation),
    [aspectRatioOptions, selectedRelation]
  );

  const lockOrientation = selectedOption?.lock_orientation ?? false;
  const currentSizes = selectedOption?.sizes ?? [];

  useEffect(() => {
    if (!selectedOption) {
      return;
    }

    if (selectedOption.lock_orientation) {
      setOrientation("horizontal");
      return;
    }

    setOrientation(getPreferredOrientation(selectedOption.relation));
  }, [selectedOption?.relation, selectedOption?.lock_orientation]);

  const previewAspectRatio = useMemo(() => {
    const [width, height] = selectedRelation.split(":").map(Number);
    if (!width || !height) {
      return "1 / 1";
    }

    if (!lockOrientation && orientation === "vertical") {
      return `${height} / ${width}`;
    }

    return `${width} / ${height}`;
  }, [selectedRelation, orientation, lockOrientation]);

  const locale = language === "english" ? "en-US" : "es-CR";
  const currency = quoteContent?.pricing?.currency ?? "USD";
  const priceFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }),
    [locale, currency]
  );

  const priceHighlights: QuotePriceHighlight[] = useMemo(() => {
    if (!quoteContent?.pricing || !selectedSize) {
      return [];
    }

    const area = parseSizeArea(selectedSize);
    const tiers = quoteContent.pricing.tiers ?? [];
    if (!area || !tiers.length) {
      return [];
    }

    const tier =
      tiers.find((item) => area <= item.max_area) ?? tiers[tiers.length - 1];
    const labels = quoteContent.pricing.labels;

    if (!tier || !labels) {
      return [];
    }

    return PRICE_TONES.map((tone) => {
      const label = labels[tone];
      const value = tier?.[tone];
      if (!label || typeof value !== "number") {
        return null;
      }
      return {
        label,
        tone,
        value: priceFormatter.format(value),
      };
    }).filter((item): item is QuotePriceHighlight => Boolean(item));
  }, [quoteContent, selectedSize, priceFormatter]);

  if (
    loading ||
    !quoteContent ||
    !quoteContent.selection_panel ||
    !quoteContent.form_panel ||
    !quoteContent.options ||
    !quoteContent.pricing ||
    !quoteContent.orientation_labels
  ) {
    return null;
  }

  const selectionCopy = quoteContent.selection_panel;
  const orientationLabels = quoteContent.orientation_labels;

  const formatSizeWithUnit = (size: string) =>
    `${formatSizeForOrientation(size, orientation, lockOrientation)} ${
      selectionCopy.sizeUnit
    }`;

  const displaySize = selectedSize
    ? formatSizeWithUnit(selectedSize)
    : selectionCopy.sizePlaceholder;

  const orientationLabel = lockOrientation
    ? selectionCopy.orientationFreeLabel
    : orientationLabels[orientation] ?? orientation;

  return (
    <section className="quote-page">
      <div className="quote-page__wrapper">
        <div className="quote-page__sizes-panel">
          <p className="quote-page__eyebrow">{selectionCopy.eyebrow}</p>
          <h1>{selectionCopy.title}</h1>
          <p className="quote-page__description">{selectionCopy.description}</p>

          <div className="quote-page__selection-flow">
            <div className="quote-page__field">
              <label>{selectionCopy.ratioLabel}</label>
              <QuoteAspectRatioGrid
                options={aspectRatioOptions}
                selectedRelation={selectedRelation}
                onSelect={(option) => {
                  setSelectedRelation(option.relation);
                  setSelectedSize(option.sizes[0] ?? "");
                  setOrientation(
                    option.lock_orientation
                      ? "horizontal"
                      : getPreferredOrientation(option.relation)
                  );
                }}
                sizeCountSuffix={selectionCopy.sizeCountSuffix}
              />
            </div>

            {!lockOrientation && (
              <div className="quote-page__field">
                <label>{selectionCopy.orientationLabel}</label>
                <QuoteOrientationToggle
                  orientation={orientation}
                  labels={orientationLabels}
                  onChange={setOrientation}
                />
              </div>
            )}

            <div className="quote-page__field">
              <label>{selectionCopy.sizeLabel}</label>
              <QuoteSizeSelector
                sizes={currentSizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
                formatSize={formatSizeWithUnit}
              />
            </div>
          </div>

          <QuotePreviewCard
            eyebrow={selectionCopy.previewLabel}
            displaySize={displaySize}
            relation={selectedRelation}
            orientationLabel={orientationLabel}
            aspectRatio={previewAspectRatio}
          />
        </div>

        <QuoteParametersForm
          copy={quoteContent.form_panel}
          options={{
            techniques: quoteContent.options.techniques ?? [],
            supports: quoteContent.options.supports ?? [],
            styles: quoteContent.options.styles ?? [],
          }}
          priceHighlights={priceHighlights}
        />
      </div>
    </section>
  );
};

export default QuotePage;
