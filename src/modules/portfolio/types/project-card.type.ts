import type { PortfolioProject } from './portfolio.type';

export interface ProjectCardProps {
  project: PortfolioProject;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
