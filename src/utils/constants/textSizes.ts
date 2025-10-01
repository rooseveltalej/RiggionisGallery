export const TEXT_SIZES = {
  // Extra Small
  XS: '0.75rem',     // 12px
  
  // Small
  SM: '0.875rem',    // 14px
  
  // Base/Medium
  BASE: '1rem',      // 16px
  MD: '1rem',        // 16px (alias)
  
  // Large
  LG: '1.125rem',    // 18px
} as const;

// Type para TypeScript
export type TextSize = typeof TEXT_SIZES[keyof typeof TEXT_SIZES];

// Aliases comunes para mayor legibilidad
export const FONT_SIZES = {
  CAPTION: TEXT_SIZES.XS,
  BODY_SMALL: TEXT_SIZES.SM,
  BODY: TEXT_SIZES.BASE,
  BODY_LARGE: TEXT_SIZES.LG,
} as const;