import type { PrismTheme } from 'prism-react-renderer';

export const CODE_LANGUAGES: Record<string, string> = {
  ts: 'typescript',
  tsx: 'tsx',
  js: 'javascript',
  json: 'json',
  css: 'css',
};

export const DEFAULT_CODE_LANGUAGE = 'tsx';

export const CODE_THEME: PrismTheme = {
  plain: {
    color: 'var(--color-foreground)',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: { color: 'var(--color-muted-foreground)', fontStyle: 'italic' },
    },
    {
      types: ['punctuation', 'operator'],
      style: { color: 'var(--color-muted-foreground)' },
    },
    {
      types: ['keyword', 'module', 'imports', 'exports', 'control-flow', 'atrule', 'rule'],
      style: { color: 'var(--color-primary)', fontWeight: '600' },
    },
    {
      types: ['string', 'char', 'template-string', 'attr-value', 'regex', 'url'],
      style: { color: 'var(--color-success-foreground)' },
    },
    {
      types: ['function', 'method', 'function-variable'],
      style: { color: 'var(--color-info-foreground)' },
    },
    {
      types: ['number', 'boolean', 'constant', 'null', 'undefined'],
      style: { color: 'var(--color-warning-foreground)' },
    },
    {
      types: ['tag', 'class-name', 'builtin', 'maybe-class-name', 'selector'],
      style: { color: 'var(--color-chart-2)' },
    },
    {
      types: ['attr-name', 'property', 'property-access'],
      style: { color: 'var(--color-chart-4)' },
    },
  ],
};
