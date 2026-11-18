import { describe, expect, it } from 'vitest';

import { SCROLL_REVEAL_STATES } from '@/shared/constants/scroll-reveal.constant';
import { toHiddenRevealState } from '@/shared/utils/scroll-reveal.util';

const VIEWPORT = { top: 0, height: 900 };

const entryAt = (top: number, height: number, rootBounds: Nullable<typeof VIEWPORT> = VIEWPORT) =>
  ({ boundingClientRect: { top, height }, rootBounds }) as IntersectionObserverEntry;

describe('toHiddenRevealState', () => {
  it('hides above when the element left through the top edge', () => {
    expect(toHiddenRevealState(entryAt(-300, 200))).toBe(SCROLL_REVEAL_STATES.ABOVE);
  });

  it('hides above when a short element sits under a header above the scroll area', () => {
    expect(toHiddenRevealState(entryAt(10, 40))).toBe(SCROLL_REVEAL_STATES.ABOVE);
  });

  it('hides below when the element left through the bottom edge', () => {
    expect(toHiddenRevealState(entryAt(900, 200))).toBe(SCROLL_REVEAL_STATES.BELOW);
  });

  it('falls back to below without an entry or root bounds', () => {
    expect(toHiddenRevealState(null)).toBe(SCROLL_REVEAL_STATES.BELOW);
    expect(toHiddenRevealState(entryAt(-300, 200, null))).toBe(SCROLL_REVEAL_STATES.BELOW);
  });
});
