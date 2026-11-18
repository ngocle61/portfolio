import { describe, expect, it } from 'vitest';

import en from '@/locale/portfolio-content/en.json';
import vi from '@/locale/portfolio-content/vi.json';
import { CODING_SKILLS } from '@/modules/portfolio/constants/coding-skills.constant';
import { PROJECT_FOLDER_TREE } from '@/modules/portfolio/constants/folder-tree.constant';
import { PORTFOLIO_SKILLS } from '@/modules/portfolio/constants/portfolio-profile.constant';
import { PORTFOLIO_PROJECTS } from '@/modules/portfolio/constants/portfolio-projects.constant';
import type { FolderTreeNode } from '@/modules/portfolio/types/portfolio.type';

const toShape = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.length;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, toShape(item)]));
  }
  return typeof value;
};

const noteKeysOf = (nodes: readonly FolderTreeNode[]): string[] =>
  nodes.flatMap((node) => [
    ...(node.noteKey ? [node.noteKey] : []),
    ...noteKeysOf(node.children ?? []),
  ]);

describe('portfolio-content locale', () => {
  it('translates every English key and list item into Vietnamese', () => {
    expect(toShape(vi)).toEqual(toShape(en));
  });

  it('has content for every project, skill group, coding skill and tree note', () => {
    PORTFOLIO_PROJECTS.forEach(({ contentKey }) => expect(en.projects).toHaveProperty(contentKey));
    PORTFOLIO_SKILLS.stacks
      .flatMap(({ groups }) => groups)
      .forEach((groupKey) => expect(en.skillGroups).toHaveProperty(groupKey));
    CODING_SKILLS.forEach(({ contentKey }) => expect(en.codingSkills).toHaveProperty(contentKey));
    noteKeysOf(PROJECT_FOLDER_TREE).forEach((noteKey) => expect(en.tree).toHaveProperty(noteKey));
  });

  it('labels every reading-order step of a coding skill', () => {
    CODING_SKILLS.forEach(({ contentKey, sources, tree }) =>
      expect(en.codingSkills[contentKey].steps).toHaveLength(sources.length + (tree ? 1 : 0)),
    );
  });
});
