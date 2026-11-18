import { describe, expect, it } from 'vitest';

import content from '@/locale/portfolio-content/en.json';
import { CODING_SKILLS } from '@/modules/portfolio/constants/coding-skills.constant';
import { FOLDER_STRUCTURE_STEP } from '@/modules/portfolio/constants/folder-tree.constant';
import { toCodingSkillSteps } from '@/modules/portfolio/utils/coding-skill-step.util';

describe('toCodingSkillSteps', () => {
  it('lists the sources in reading order with their roles and file names', () => {
    const formSkill = CODING_SKILLS.find((skill) => skill.id === 'form-handling')!;
    const roles = content.codingSkills[formSkill.contentKey].steps;

    expect(toCodingSkillSteps(formSkill, roles).slice(0, 2)).toEqual([
      { id: formSkill.sources[0], role: 'The form', label: 'create-user-form.tsx' },
      { id: formSkill.sources[1], role: 'Validation schema', label: 'create-user-form.schema.ts' },
    ]);
  });

  it('puts the folder structure first when the skill has a tree', () => {
    const structureSkill = CODING_SKILLS.find((skill) => skill.tree);
    const roles = structureSkill ? content.codingSkills[structureSkill.contentKey].steps : [];

    expect(structureSkill && toCodingSkillSteps(structureSkill, roles)[0]).toEqual({
      ...FOLDER_STRUCTURE_STEP,
      role: 'Folder structure',
    });
  });

  it('leaves the role empty when a translation is missing', () => {
    const formSkill = CODING_SKILLS.find((skill) => skill.id === 'form-handling')!;

    expect(toCodingSkillSteps(formSkill, [])[0]?.role).toBe('');
  });
});
