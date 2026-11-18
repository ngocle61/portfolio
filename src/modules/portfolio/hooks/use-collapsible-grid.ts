import { useEffect, useRef, useState } from 'react';

import { AUTO_EXPAND_ROOT_MARGIN } from '../constants/portfolio-card.constant';
import { toCollapsedCardClassName } from '../utils/collapsed-card.util';

// The grid starts collapsed and expands for good once the element behind sentinelRef (the Show
// more button) scrolls near the viewport, or when the button is clicked.
export const useCollapsibleGrid = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (isExpanded || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsExpanded(true);
      },
      { rootMargin: AUTO_EXPAND_ROOT_MARGIN },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isExpanded]);

  const itemClassName = (index: number): string =>
    isExpanded ? '' : toCollapsedCardClassName(index);

  const expand = () => setIsExpanded(true);

  return { isExpanded, sentinelRef, itemClassName, expand };
};
