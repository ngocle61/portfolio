import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { LanguageSwitcher } from '@/shared/components/language-switcher/language-switcher';
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from '@/shared/components/page-header/page-header';
import { ThemeSwitcher } from '@/shared/components/theme-switcher/theme-switcher';

import { PortfolioOverviewSection } from './components/portfolio-overview-section';
import { PortfolioSkillsSection } from './components/portfolio-skills-section';
import { PortfolioTabs } from './components/portfolio-tabs/portfolio-tabs';

export const PortfolioPage = () => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);

  return (
    <>
      <PageHeader className="shrink-0">
        <PageHeaderContent>
          <PageHeaderTitle>{t('title')}</PageHeaderTitle>
          <PageHeaderDescription>{t('description')}</PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions className="gap-1">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </PageHeaderActions>
      </PageHeader>
      <PortfolioOverviewSection />
      <PortfolioSkillsSection />
      <PortfolioTabs />
    </>
  );
};
