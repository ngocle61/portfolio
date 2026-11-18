import { PROJECT_FOLDER_TREE } from './folder-tree.constant';
import type { CodingSkill } from '../types/portfolio.type';

export const CODING_SKILL_SOURCE_NOT_FOUND = 'Coding skill source not found';

export const CODING_SKILLS: readonly CodingSkill[] = [
  {
    id: 'project-structure',
    contentKey: 'projectStructure',
    tags: ['Feature modules', 'eslint-plugin-boundaries', 'Custom ESLint rules'],
    tree: PROJECT_FOLDER_TREE,
    sources: [],
  },
  {
    id: 'data-layer',
    contentKey: 'dataLayer',
    tags: ['TanStack Query 5', 'Axios', 'Converters'],
    sources: [
      '/src/modules/user-management/user-management.tsx',
      '/src/modules/user-management/queries/user-management.queries.ts',
      '/src/modules/user-management/services/user-management.service.ts',
      '/src/core/apis/user-management.api.ts',
      '/src/modules/user-management/converters/user.converter.ts',
    ],
  },
  {
    id: 'form-handling',
    contentKey: 'formHandling',
    tags: ['React Hook Form', 'Zod 4', 'i18next', 'TanStack Query'],
    sources: [
      '/src/modules/user-management/components/create-user-form/create-user-form.tsx',
      '/src/modules/user-management/schema/create-user-form.schema.ts',
      '/src/_widgets/ui/form/input-field/input-field.tsx',
      '/src/_widgets/ui/form/use-form-field.ts',
      '/src/modules/user-management/hooks/use-create-user.ts',
      '/src/core/utils/form-error.util.ts',
    ],
  },
  {
    id: 'global-types',
    contentKey: 'globalTypes',
    tags: ['TypeScript', 'Ambient types', 'Generics'],
    sources: ['/globals.type.d.ts', '/examples/user.dto.ts'],
  },
  {
    id: 'routing',
    contentKey: 'routing',
    tags: ['React Router', 'Code splitting', 'Prefetching'],
    sources: [
      '/src/router/routes.tsx',
      '/src/router/routes/user-management-routes.ts',
      '/src/router/lazy-page.ts',
      '/src/router/loaders/user-management.loader.ts',
      '/src/router/loaders/create-prefetch-loader.ts',
    ],
  },
  {
    id: 'design-system',
    contentKey: 'designSystem',
    tags: ['Tailwind CSS 4', 'CVA', 'Radix UI', 'shadcn/ui'],
    sources: [
      '/src/_widgets/ui/button/button.tsx',
      '/src/_widgets/ui/button/variant.ts',
      '/src/_widgets/ui/button/constants.ts',
      '/src/_widgets/ui/dialog/dialog-content.tsx',
    ],
  },
  {
    id: 'design-tokens',
    contentKey: 'designTokens',
    tags: ['CSS variables', 'Tailwind CSS 4', 'Dark mode'],
    sources: [
      '/examples/design-tokens/tokens.css',
      '/examples/design-tokens/theme.css',
      '/examples/design-tokens/base.css',
      '/examples/design-tokens/usage.tsx',
    ],
  },
];
