import type { ReactNode } from 'react';

import type { SCROLL_REVEAL_STATES } from '../../constants/scroll-reveal.constant';

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  order?: number;
}

export type ScrollRevealState = (typeof SCROLL_REVEAL_STATES)[keyof typeof SCROLL_REVEAL_STATES];
