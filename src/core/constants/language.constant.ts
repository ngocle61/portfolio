export const LANGUAGES = {
  EN: 'en',
  VI: 'vi',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.EN;

export const I18N_NAMESPACES = {
  COMMON: 'common',
  PORTFOLIO: 'portfolio',
  PORTFOLIO_CONTENT: 'portfolio-content',
} as const;

export const DEFAULT_NAMESPACE = I18N_NAMESPACES.COMMON;
