import { describe, expect, it } from 'vitest';

import { CODING_SKILLS } from '@/modules/portfolio/constants/coding-skills.constant';
import { codingSkillSourceService } from '@/modules/portfolio/services/coding-skill-source.service';

const referencedPaths = [...new Set(CODING_SKILLS.flatMap((skill) => skill.sources))];

describe('codingSkillSourceService', () => {
  it('can load every source file a coding skill references', async () => {
    expect(codingSkillSourceService.paths()).toEqual(expect.arrayContaining(referencedPaths));

    const sources = await Promise.all(referencedPaths.map(codingSkillSourceService.load));

    sources.forEach((source) => expect(source.length).toBeGreaterThan(0));
  });

  it('only bundles files that a coding skill shows', () => {
    expect([...codingSkillSourceService.paths()].sort()).toEqual([...referencedPaths].sort());
  });

  it('rejects a path that is not bundled', async () => {
    await expect(codingSkillSourceService.load('/src/unknown.ts')).rejects.toThrow(
      '/src/unknown.ts',
    );
  });
});
