import { z } from 'zod';

import { PORTFOLIO_TABS } from '../constants/portfolio-tabs.constant';

export const portfolioSearchSchema = z.object({
  tab: z.enum(PORTFOLIO_TABS).catch(PORTFOLIO_TABS.PROJECTS),
  project: z.string().catch(''),
  skill: z.string().catch(''),
});
