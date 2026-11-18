import { queryOptions } from '@tanstack/react-query';

import { PORTFOLIO_QUERY_KEYS } from '../constants/query-keys.constant';
import { codingSkillSourceService } from '../services/coding-skill-source.service';

export const codingSkillQueries = {
  all: () => [PORTFOLIO_QUERY_KEYS.CODING_SKILL_SOURCE],

  source: (path: string) =>
    queryOptions({
      queryKey: [PORTFOLIO_QUERY_KEYS.CODING_SKILL_SOURCE, path],
      queryFn: () => codingSkillSourceService.load(path),
      staleTime: Infinity,
    }),
};
