import { useLayoutEffect, useRef, useState } from 'react';

import { toFittingCount } from '../utils/row-fit.util';

// Measures a hidden copy of every badge (the last child is the "+N" badge) and returns how many fit
// in maxRows of the container. It measures again whenever the container resizes.
export const useFittingBadgeCount = (items: readonly string[], maxRows: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(items.length);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const update = () => {
      const badges = [...measure.children].filter((child) => child instanceof HTMLElement);
      const overflowBadge = badges.pop();
      setVisibleCount(
        toFittingCount({
          itemWidths: badges.map((badge) => badge.offsetWidth),
          overflowWidth: overflowBadge?.offsetWidth ?? 0,
          availableWidth: container.clientWidth,
          gap: Number.parseFloat(getComputedStyle(container).columnGap) || 0,
          maxRows,
        }),
      );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, [items, maxRows]);

  return { containerRef, measureRef, visibleCount };
};
