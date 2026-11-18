import type { z } from 'zod';

import type { portfolioSearchSchema } from '../schema/portfolio-search.schema';

export type PortfolioSearchState = z.infer<typeof portfolioSearchSchema>;
