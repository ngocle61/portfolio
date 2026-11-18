import type { PORTFOLIO_TABS } from '../constants/portfolio-tabs.constant';

export type PortfolioTab = (typeof PORTFOLIO_TABS)[keyof typeof PORTFOLIO_TABS];
