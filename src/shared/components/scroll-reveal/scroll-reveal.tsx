import { domAnimation, inView, LazyMotion, m, MotionConfig } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import type { ScrollRevealProps, ScrollRevealState } from './scroll-reveal.type';
import {
  SCROLL_REVEAL_REDUCED_MOTION,
  SCROLL_REVEAL_STATES,
  SCROLL_REVEAL_VARIANTS,
  SCROLL_REVEAL_VISIBLE_AMOUNT,
} from '../../constants/scroll-reveal.constant';
import { noop } from '../../utils/function.util';
import { toHiddenRevealState } from '../../utils/scroll-reveal.util';

export const ScrollReveal = ({ children, className, order = 0 }: ScrollRevealProps) => {
  const [revealState, setRevealState] = useState<ScrollRevealState>(SCROLL_REVEAL_STATES.BELOW);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const stopReveal = inView(
      element,
      () => {
        setRevealState(SCROLL_REVEAL_STATES.VISIBLE);
        return noop;
      },
      { amount: SCROLL_REVEAL_VISIBLE_AMOUNT },
    );
    const stopHide = inView(element, () => (entry) => setRevealState(toHiddenRevealState(entry)));

    return () => {
      stopReveal();
      stopHide();
    };
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion={SCROLL_REVEAL_REDUCED_MOTION}>
        <m.div
          ref={elementRef}
          className={className}
          custom={order}
          variants={SCROLL_REVEAL_VARIANTS}
          initial={SCROLL_REVEAL_STATES.BELOW}
          animate={revealState}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
};
