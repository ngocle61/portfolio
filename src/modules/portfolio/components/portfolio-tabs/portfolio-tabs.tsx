import { CodeXmlIcon, FolderKanbanIcon } from 'lucide-react';
import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { useSearchParamsState } from '@/shared/hooks/use-search-params-state';
import { ICON_PLACEMENTS, Tabs, TABS_LIST_VARIANTS, TabsContent, TabsList, TabsTrigger } from '@ui';

import { CodingSkillsTab } from './coding-skills-tab/coding-skills-tab';
import { ProjectsTab } from './projects-tab/projects-tab';
import { PORTFOLIO_TABS } from '../../constants/portfolio-tabs.constant';
import { useScrollIntoViewOnInit } from '../../hooks/use-scroll-into-view-on-init';
import { portfolioSearchSchema } from '../../schema/portfolio-search.schema';
import { PortfolioSectionHeader } from '../portfolio-section-header';

export const PortfolioTabs = () => {
  const headingId = useId();
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);
  const { state, setState } = useSearchParamsState(portfolioSearchSchema);
  const [searchParams] = useSearchParams();
  const sectionRef = useScrollIntoViewOnInit<HTMLElement>(searchParams.has('tab'));

  const changeTab = (value: string) =>
    setState({ tab: portfolioSearchSchema.shape.tab.parse(value) });

  return (
    <section ref={sectionRef} aria-labelledby={headingId} className="flex shrink-0 flex-col gap-4">
      <PortfolioSectionHeader
        id={headingId}
        title={t('work.title')}
        description={t('work.description')}
      />
      <Tabs value={state.tab} onValueChange={changeTab} className="gap-4">
        <TabsList variant={TABS_LIST_VARIANTS.LINE}>
          <TabsTrigger value={PORTFOLIO_TABS.PROJECTS}>
            <FolderKanbanIcon data-icon={ICON_PLACEMENTS.INLINE_START} />
            {t('tabs.projects')}
          </TabsTrigger>
          <TabsTrigger value={PORTFOLIO_TABS.CODING_SKILLS}>
            <CodeXmlIcon data-icon={ICON_PLACEMENTS.INLINE_START} />
            {t('tabs.codingSkills')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value={PORTFOLIO_TABS.PROJECTS}>
          <ProjectsTab />
        </TabsContent>
        <TabsContent value={PORTFOLIO_TABS.CODING_SKILLS}>
          <CodingSkillsTab />
        </TabsContent>
      </Tabs>
    </section>
  );
};
