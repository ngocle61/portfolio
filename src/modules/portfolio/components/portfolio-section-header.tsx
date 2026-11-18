import { ScrollReveal } from '@/shared/components/scroll-reveal/scroll-reveal';

import type { PortfolioSectionHeaderProps } from '../types/portfolio-section-header.type';

export const PortfolioSectionHeader = ({
  id,
  title,
  description,
  children,
}: PortfolioSectionHeaderProps) => (
  <ScrollReveal className="flex flex-wrap items-end justify-between gap-3">
    <div className="flex flex-col gap-1">
      <h2 id={id} className="font-heading text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {children}
  </ScrollReveal>
);
