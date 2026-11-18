import type { ScrollRevealState } from '../components/scroll-reveal/scroll-reveal.type';
import { SCROLL_REVEAL_STATES } from '../constants/scroll-reveal.constant';

export const toHiddenRevealState = (
  entry: Nullable<IntersectionObserverEntry>,
): ScrollRevealState => {
  if (!entry?.rootBounds) return SCROLL_REVEAL_STATES.BELOW;
  const { top, height } = entry.boundingClientRect;
  const rootCenter = entry.rootBounds.top + entry.rootBounds.height / 2;
  return top + height / 2 < rootCenter ? SCROLL_REVEAL_STATES.ABOVE : SCROLL_REVEAL_STATES.BELOW;
};
