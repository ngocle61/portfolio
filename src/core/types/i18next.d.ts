import type common from '../../locale/common/en.json';
import type portfolio from '../../locale/portfolio/en.json';
import type portfolioContent from '../../locale/portfolio-content/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      portfolio: typeof portfolio;
      'portfolio-content': typeof portfolioContent;
    };
  }
}
