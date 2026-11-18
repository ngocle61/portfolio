import type { CodingSkill } from './portfolio.type';

export interface CodingSkillCardProps {
  skill: CodingSkill;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
