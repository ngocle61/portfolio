import { describe, expect, it } from 'vitest';

import { toFittingCount } from '@/shared/utils/row-fit.util';

const BADGES = [60, 60, 60, 60, 60];

describe('toFittingCount', () => {
  it('shows every badge when they fit in the rows', () => {
    expect(
      toFittingCount({
        itemWidths: BADGES,
        overflowWidth: 30,
        availableWidth: 400,
        gap: 5,
        maxRows: 1,
      }),
    ).toBe(5);
  });

  it('keeps room for the overflow badge on the last row', () => {
    expect(
      toFittingCount({
        itemWidths: BADGES,
        overflowWidth: 30,
        availableWidth: 200,
        gap: 5,
        maxRows: 1,
      }),
    ).toBe(2);
  });

  it('never needs more than maxRows', () => {
    expect(
      toFittingCount({
        itemWidths: BADGES,
        overflowWidth: 30,
        availableWidth: 130,
        gap: 5,
        maxRows: 2,
      }),
    ).toBe(3);
  });
});
