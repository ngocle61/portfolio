import { toSourceFileName } from './source-file.util';
import { FOLDER_STRUCTURE_STEP } from '../constants/folder-tree.constant';
import type { CodingSkill, CodingSkillStep } from '../types/portfolio.type';

// The reading order: the folder tree first when the skill has one, then its source files.
// `roles` holds one translated label per step, in the same order.
export const toCodingSkillSteps = (
  skill: CodingSkill,
  roles: readonly string[],
): CodingSkillStep[] =>
  [
    ...(skill.tree ? [FOLDER_STRUCTURE_STEP] : []),
    ...skill.sources.map((path) => ({ id: path, label: toSourceFileName(path) })),
  ].map((step, index) => ({ ...step, role: roles[index] ?? '' }));
