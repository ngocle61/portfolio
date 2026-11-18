import type { UseQueryResult } from '@tanstack/react-query';

export interface CodingSkillSourcePreviewProps {
  path: string;
  sourceQuery: UseQueryResult<string>;
}
