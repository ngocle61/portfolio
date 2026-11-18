import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { ScrollReveal } from '@/shared/components/scroll-reveal/scroll-reveal';
import { useSearchParamsState } from '@/shared/hooks/use-search-params-state';
import { Button, BUTTON_SIZES, BUTTON_VARIANTS, Grid, ICON_PLACEMENTS } from '@ui';

import { CodingSkillCard } from './coding-skill-card/coding-skill-card';
import { CODING_SKILLS } from '../../../constants/coding-skills.constant';
import { CARD_GRID_COLUMNS } from '../../../constants/portfolio-card.constant';
import { SHOWCASE_LIVE_URL } from '../../../constants/showcase.constant';
import { portfolioSearchSchema } from '../../../schema/portfolio-search.schema';

export const CodingSkillsTab = () => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);
  const { state, setState } = useSearchParamsState(portfolioSearchSchema);

  const handleOpenChange = (skillId: string) => (open: boolean) =>
    setState({ skill: open ? skillId : '' });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">{t('codingSkills.description')}</p>
        <Button
          asChild
          variant={BUTTON_VARIANTS.OUTLINE}
          size={BUTTON_SIZES.SM}
          className="cursor-pointer"
        >
          <a href={SHOWCASE_LIVE_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink aria-hidden data-icon={ICON_PLACEMENTS.INLINE_START} />
            {t('codingSkills.liveDemo')}
          </a>
        </Button>
      </div>
      <Grid gap={4} className="sm:grid-cols-2 xl:grid-cols-3">
        {CODING_SKILLS.map((skill, index) => (
          <ScrollReveal key={skill.id} order={index % CARD_GRID_COLUMNS} className="h-full">
            <CodingSkillCard
              skill={skill}
              open={state.skill === skill.id}
              onOpenChange={handleOpenChange(skill.id)}
            />
          </ScrollReveal>
        ))}
      </Grid>
    </div>
  );
};
