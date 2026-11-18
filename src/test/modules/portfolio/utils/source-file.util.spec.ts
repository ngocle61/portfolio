import { describe, expect, it } from 'vitest';

import {
  toCodeLanguage,
  toDisplayPath,
  toSourceFileName,
  toSourceLines,
} from '@/modules/portfolio/utils/source-file.util';

describe('source file utils', () => {
  it('derives the file name, display path and language from a path', () => {
    const path = '/src/core/utils/form-error.util.ts';

    expect(toSourceFileName(path)).toBe('form-error.util.ts');
    expect(toDisplayPath(path)).toBe('src/core/utils/form-error.util.ts');
    expect(toCodeLanguage(path)).toBe('typescript');
    expect(toCodeLanguage('/src/router/routes.tsx')).toBe('tsx');
    expect(toCodeLanguage('/eslint.config.js')).toBe('javascript');
    expect(toCodeLanguage('/README')).toBe('tsx');
  });

  it('drops the trailing newline so no empty last line is rendered', () => {
    expect(toSourceLines('const a = 1;\n')).toBe('const a = 1;');
  });
});
