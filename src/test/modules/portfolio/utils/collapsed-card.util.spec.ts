import { describe, expect, it } from 'vitest';

import { toCollapsedCardClassName } from '@/modules/portfolio/utils/collapsed-card.util';

describe('toCollapsedCardClassName', () => {
  it.each([
    [0, ''],
    [1, ''],
    [2, 'max-sm:hidden'],
    [3, 'max-sm:hidden'],
    [4, 'max-xl:hidden'],
    [5, 'max-xl:hidden'],
    [6, 'hidden'],
    [11, 'hidden'],
  ])('keeps two rows visible for card %i', (index, className) => {
    expect(toCollapsedCardClassName(index)).toBe(className);
  });
});
