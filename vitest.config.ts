import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      include: ['src/**/*.spec.{ts,tsx}'],
      setupFiles: ['./src/test/setup.ts'],
      css: { include: [/\/showcase\//] },
      restoreMocks: true,
      coverage: {
        provider: 'v8',
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/test/**',
          'src/main.tsx',
          'src/**/*.d.ts',
          'src/**/types/**',
          'src/**/*.type.ts',
        ],
        reporter: ['text-summary', 'html'],
        thresholds: {
          statements: 85,
          branches: 72,
          functions: 74,
          lines: 86,
        },
      },
    },
  }),
);
