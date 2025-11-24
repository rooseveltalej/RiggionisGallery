export type QuoteOrientation = "horizontal" | "vertical";

export interface QuoteAspectRatioOption {
  relation: string;
  sizes: string[];
  lock_orientation?: boolean;
}

export interface QuoteSelectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  ratioLabel: string;
  orientationLabel: string;
  sizeLabel: string;
  previewLabel: string;
  orientationFreeLabel: string;
  sizeCountSuffix: string;
  sizeUnit: string;
  sizePlaceholder: string;
}

export interface QuoteFormFieldCopy {
  label: string;
  placeholder: string;
}

export interface QuoteFormCopy {
  eyebrow: string;
  title: string;
  description: string;
  inputs: {
    technique: QuoteFormFieldCopy;
    support: QuoteFormFieldCopy;
    style: QuoteFormFieldCopy;
  };
}

export interface QuotePriceTier {
  max_area: number;
  min: number;
  avg: number;
  max: number;
}

export type QuotePriceTone = "min" | "avg" | "max";

export interface QuotePricingConfig {
  currency: string;
  labels: Record<QuotePriceTone, string>;
  tiers: QuotePriceTier[];
}

export interface QuoteOptions {
  aspect_ratios: QuoteAspectRatioOption[];
  techniques: string[];
  supports: string[];
  styles: string[];
}

export interface QuotePageContent {
  selection_panel: QuoteSelectionCopy;
  form_panel: QuoteFormCopy;
  orientation_labels: Record<QuoteOrientation, string>;
  options: QuoteOptions;
  pricing: QuotePricingConfig;
}

export interface QuotePriceHighlight {
  label: string;
  value: string;
  tone: QuotePriceTone;
}

export interface QuoteFormValues {
  technique: string;
  support: string;
  style: string;
}
