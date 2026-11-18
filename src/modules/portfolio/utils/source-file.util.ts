import { CODE_LANGUAGES, DEFAULT_CODE_LANGUAGE } from '../constants/code-theme.constant';

export const toSourceFileName = (path: string): string => path.split('/').at(-1) ?? path;

export const toCodeLanguage = (path: string): string =>
  CODE_LANGUAGES[path.split('.').at(-1) ?? ''] ?? DEFAULT_CODE_LANGUAGE;

export const toSourceLines = (code: string): string => code.replace(/\n$/, '');

export const toDisplayPath = (path: string): string => path.replace(/^\//, '');
