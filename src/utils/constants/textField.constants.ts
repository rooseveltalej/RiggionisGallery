/**
 * TextField Component Constants
 * Centraliza valores hardcodeados para mejor mantenimiento
 */

// Textos por defecto
export const DEFAULT_TEXTS = {
  LABEL_FALLBACK: 'Campo de texto',
  ARIA_LABEL_FALLBACK: 'Campo de entrada de texto',
  REQUIRED_INDICATOR: '*',
  REQUIRED_ARIA_LABEL: 'obligatorio',
  EMPTY: '',
} as const;

// Clases CSS
export const CSS_CLASSES = {
  CONTAINER: 'search-field',
  CONTAINER_VISIBLE: 'search-field-container',
  INPUT: 'search-input',
  ICON: 'search-icon',
  LABEL: 'search-label',
  LABEL_VISIBLE: 'search-label-visible',
  SCREEN_READER_ONLY: 'sr-only',
  REQUIRED_ASTERISK: 'required-asterisk',
} as const;

// Prefijos para IDs
export const ID_PREFIXES = {
  TEXTFIELD: 'textfield',
  LABEL: 'label',
  ERROR: 'error',
  HELP: 'help',
} as const;

// Tamaños por defecto
export const DEFAULT_SIZES = {
  ICON: {
    MOBILE: '1.5rem',
    TABLET: '1.375rem',
    DESKTOP: '1.25rem',
  },
  FONT: {
    MOBILE: '1.125rem',
    TABLET: '1.0625rem',
    DESKTOP: '1rem',
  },
} as const;

// Atributos ARIA por defecto
export const ARIA_ATTRIBUTES = {
  INVALID: 'aria-invalid',
  DESCRIBEDBY: 'aria-describedby',
  LABEL: 'aria-label',
  LABELLEDBY: 'aria-labelledby',
  REQUIRED: 'aria-required',
} as const;