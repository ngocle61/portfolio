import type { Variants } from 'motion/react';

export const SCROLL_REVEAL_OFFSET_Y = 24;

export const SCROLL_REVEAL_DURATION_SECONDS = 0.5;

export const SCROLL_REVEAL_VISIBLE_AMOUNT = 0.15;

export const SCROLL_REVEAL_STAGGER_SECONDS = 0.08;

export const SCROLL_REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export const SCROLL_REVEAL_REDUCED_MOTION = 'user';

export const SCROLL_REVEAL_STATES = {
  VISIBLE: 'visible',
  ABOVE: 'above',
  BELOW: 'below',
} as const;

export const SCROLL_REVEAL_VARIANTS: Variants = {
  [SCROLL_REVEAL_STATES.VISIBLE]: (order: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: SCROLL_REVEAL_DURATION_SECONDS,
      ease: SCROLL_REVEAL_EASE,
      delay: order * SCROLL_REVEAL_STAGGER_SECONDS,
    },
  }),
  [SCROLL_REVEAL_STATES.ABOVE]: {
    opacity: 0,
    y: -SCROLL_REVEAL_OFFSET_Y,
    transition: { duration: SCROLL_REVEAL_DURATION_SECONDS, ease: SCROLL_REVEAL_EASE },
  },
  [SCROLL_REVEAL_STATES.BELOW]: {
    opacity: 0,
    y: SCROLL_REVEAL_OFFSET_Y,
    transition: { duration: SCROLL_REVEAL_DURATION_SECONDS, ease: SCROLL_REVEAL_EASE },
  },
};
