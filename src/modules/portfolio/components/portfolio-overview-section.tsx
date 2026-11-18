import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { ScrollReveal } from '@/shared/components/scroll-reveal/scroll-reveal';
import {
  Button,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Grid,
  ICON_PLACEMENTS,
} from '@ui';

import { PORTFOLIO_LINKS, PORTFOLIO_OWNER_NAME } from '../constants/portfolio-profile.constant';

export const PortfolioOverviewSection = () => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);

  const summary = t('profile.summary', { returnObjects: true });

  return (
    <ScrollReveal className="shrink-0">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{PORTFOLIO_OWNER_NAME}</CardTitle>
          <CardDescription className="flex flex-wrap items-center gap-x-2">
            <span className="font-medium text-foreground">{t('profile.title')}</span>
            <span aria-hidden>·</span>
            <span>{t('profile.experience')}</span>
          </CardDescription>
          <CardAction className="flex flex-wrap justify-end gap-2">
            {PORTFOLIO_LINKS.map(({ label, href, icon: Icon }) => (
              <Button
                key={href}
                asChild
                variant={BUTTON_VARIANTS.OUTLINE}
                size={BUTTON_SIZES.SM}
                className="cursor-pointer"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden data-icon={ICON_PLACEMENTS.INLINE_START} />
                  {label}
                </a>
              </Button>
            ))}
          </CardAction>
        </CardHeader>
        <CardContent>
          <Grid gap={6} className="lg:grid-cols-2">
            {summary.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};
