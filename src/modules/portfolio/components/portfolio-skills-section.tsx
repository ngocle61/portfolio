import { useId } from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { OverflowBadge } from '@/shared/components/overflow-badge/overflow-badge';
import { ScrollReveal } from '@/shared/components/scroll-reveal/scroll-reveal';
import { TruncatedText } from '@/shared/components/truncated-text/truncated-text';
import {
  Badge,
  BADGE_VARIANTS,
  Card,
  CARD_SIZES,
  CardContent,
  CardHeader,
  CardTitle,
  Grid,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@ui';

import { PortfolioSectionHeader } from './portfolio-section-header';
import { PORTFOLIO_SKILLS, VISIBLE_TOOLS_COUNT } from '../constants/portfolio-profile.constant';

const [defaultStack] = PORTFOLIO_SKILLS.stacks;
const visibleTools = PORTFOLIO_SKILLS.tools.slice(0, VISIBLE_TOOLS_COUNT);
const hiddenTools = PORTFOLIO_SKILLS.tools.slice(VISIBLE_TOOLS_COUNT);

export const PortfolioSkillsSection = () => {
  const headingId = useId();
  const { t } = useTranslation([I18N_NAMESPACES.PORTFOLIO, I18N_NAMESPACES.PORTFOLIO_CONTENT]);

  return (
    <section aria-labelledby={headingId} className="flex shrink-0 flex-col gap-4">
      <Tabs defaultValue={defaultStack.id} className="gap-4">
        <PortfolioSectionHeader
          id={headingId}
          title={t('skills.title')}
          description={t('skills.description')}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {t('skills.core')}
            <TabsList aria-label={t('skills.core')}>
              {PORTFOLIO_SKILLS.stacks.map((stack) => (
                <TabsTrigger key={stack.id} value={stack.id}>
                  {stack.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </PortfolioSectionHeader>
        {PORTFOLIO_SKILLS.stacks.map((stack) => (
          <TabsContent key={stack.id} value={stack.id}>
            <Grid gap={4} className="auto-rows-fr sm:grid-cols-2 xl:grid-cols-4">
              {stack.groups.map((groupKey, index) => (
                <ScrollReveal key={groupKey} order={index} className="h-full">
                  <Card size={CARD_SIZES.SM} className="h-full">
                    <CardHeader>
                      <CardTitle>
                        {t(`skillGroups.${groupKey}.name`, {
                          ns: I18N_NAMESPACES.PORTFOLIO_CONTENT,
                        })}
                      </CardTitle>
                      <TruncatedText
                        className="line-clamp-3 leading-relaxed text-muted-foreground"
                        text={t(`skillGroups.${groupKey}.description`, {
                          ns: I18N_NAMESPACES.PORTFOLIO_CONTENT,
                        })}
                      />
                    </CardHeader>
                  </Card>
                </ScrollReveal>
              ))}
              <ScrollReveal order={stack.groups.length} className="h-full">
                <Card size={CARD_SIZES.SM} className="h-full">
                  <CardHeader>
                    <CardTitle>{t('skills.tools')}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1.5">
                    {visibleTools.map((tool) => (
                      <Badge key={tool} variant={BADGE_VARIANTS.SECONDARY}>
                        {tool}
                      </Badge>
                    ))}
                    {hiddenTools.length > 0 && (
                      <OverflowBadge items={hiddenTools} label={`+${hiddenTools.length}`} />
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
