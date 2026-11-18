import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { ScrollReveal } from '@/shared/components/scroll-reveal/scroll-reveal';
import { useSearchParamsState } from '@/shared/hooks/use-search-params-state';
import { cn, Grid } from '@ui';

import { ProjectCard } from './project-card/project-card';
import {
  CARD_GRID_COLUMNS,
  COLLAPSED_CARD_LIMITS,
} from '../../../constants/portfolio-card.constant';
import { PORTFOLIO_PROJECTS } from '../../../constants/portfolio-projects.constant';
import { useCollapsibleGrid } from '../../../hooks/use-collapsible-grid';
import { portfolioSearchSchema } from '../../../schema/portfolio-search.schema';
import { ShowMoreButton } from '../../show-more-button';

export const ProjectsTab = () => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);
  const { state, setState } = useSearchParamsState(portfolioSearchSchema);
  const { isExpanded, sentinelRef, itemClassName, expand } = useCollapsibleGrid();

  const hasHiddenProjects = PORTFOLIO_PROJECTS.length > COLLAPSED_CARD_LIMITS.MOBILE;

  const handleOpenChange = (projectId: string) => (open: boolean) =>
    setState({ project: open ? projectId : '' });

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">{t('projects.description')}</p>
      <Grid gap={4} className="sm:grid-cols-2 xl:grid-cols-3">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <ScrollReveal
            key={project.id}
            order={index % CARD_GRID_COLUMNS}
            className={cn('h-full', itemClassName(index))}
          >
            <ProjectCard
              project={project}
              open={state.project === project.id}
              onOpenChange={handleOpenChange(project.id)}
            />
          </ScrollReveal>
        ))}
      </Grid>
      {hasHiddenProjects && !isExpanded && (
        <div ref={sentinelRef}>
          <ShowMoreButton onExpand={expand} />
        </div>
      )}
    </div>
  );
};
