export const TEXT_SIZES = {
  // Extra Small
  XS: "0.75rem", // 12px

  // Small
  SM: "0.875rem", // 14px

  // Base/Medium
  BASE: "1rem", // 16px
  MD: "1rem", // 16px (alias)

  // Large
  LG: "1.125rem", // 18px
} as const;

export type TextSize = (typeof TEXT_SIZES)[keyof typeof TEXT_SIZES];

export const FONT_SIZES = {
  CAPTION: TEXT_SIZES.XS,
  BODY_SMALL: TEXT_SIZES.SM,
  BODY: TEXT_SIZES.BASE,
  BODY_LARGE: TEXT_SIZES.LG,
} as const;

export const H1_BASE_CLASS = "riggioni-h1";
export const H1_DEFAULTS = {
  FONT_SIZE: "3em",
  FONT_WEIGHT: 300,
};

export const H2_BASE_CLASS = "riggioni-h2";
export const H2_DEFAULTS = {
  FONT_SIZE: "1.5em",
  FONT_WEIGHT: 400,
};

export const H3_BASE_CLASS = "riggioni-h3";
export const H3_DEFAULTS = {
  FONT_SIZE: "1.2em",
  FONT_WEIGHT: 300,
};
