import { CODING_SKILL_SOURCE_NOT_FOUND } from '../constants/coding-skills.constant';
import { SHOWCASE_ROOT } from '../constants/showcase.constant';

const showcaseLoaders = import.meta.glob<string>('/showcase/**/*', {
  query: '?raw',
  import: 'default',
});

const sourceLoaders = Object.fromEntries(
  Object.entries(showcaseLoaders).map(([path, load]) => [path.slice(SHOWCASE_ROOT.length), load]),
);

export const codingSkillSourceService = {
  paths: (): string[] => Object.keys(sourceLoaders),

  load: async (path: string): Promise<string> => {
    const load = sourceLoaders[path];
    if (!load) throw new Error(`${CODING_SKILL_SOURCE_NOT_FOUND}: ${path}`);
    return load();
  },
};
