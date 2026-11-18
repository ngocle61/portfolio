import type { CodingSkillStep } from './portfolio.type';

export interface CodingSkillStepsListProps {
  steps: readonly CodingSkillStep[];
  selectedId: string;
  onSelect: (stepId: string) => void;
}
