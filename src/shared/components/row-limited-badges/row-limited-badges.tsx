import { Badge, BADGE_VARIANTS, cn } from '@ui';

import type { RowLimitedBadgesProps } from './row-limited-badges.type';
import { useFittingBadgeCount } from '../../hooks/use-fitting-badge-count';
import { OverflowBadge } from '../overflow-badge/overflow-badge';

const toDefaultOverflow = (count: number): string => `+${count}`;

// Shows the badges that fit in maxRows; the rest sit behind a "+N" badge whose tooltip lists them.
export const RowLimitedBadges = ({
  items,
  maxRows,
  className,
  overflowClassName,
  formatOverflow = toDefaultOverflow,
  onOverflowClick,
}: RowLimitedBadgesProps) => {
  const { containerRef, measureRef, visibleCount } = useFittingBadgeCount(items, maxRows);

  const hiddenItems = items.slice(visibleCount);

  return (
    <div className={cn('relative', className)}>
      <div ref={containerRef} className="flex flex-wrap gap-1.5">
        {items.slice(0, visibleCount).map((item) => (
          <Badge key={item} variant={BADGE_VARIANTS.SECONDARY} className="shrink-0">
            {item}
          </Badge>
        ))}
        {hiddenItems.length > 0 && (
          <OverflowBadge
            className={cn('shrink-0', overflowClassName)}
            items={hiddenItems}
            label={formatOverflow(hiddenItems.length)}
            onClick={onOverflowClick}
          />
        )}
      </div>
      <div
        ref={measureRef}
        aria-hidden
        className="pointer-events-none invisible absolute inset-x-0 top-0 flex h-0 gap-1.5 overflow-hidden"
      >
        {items.map((item) => (
          <Badge key={item} variant={BADGE_VARIANTS.SECONDARY} className="shrink-0">
            {item}
          </Badge>
        ))}
        <Badge variant={BADGE_VARIANTS.OUTLINE} className="shrink-0">
          {formatOverflow(items.length)}
        </Badge>
      </div>
    </div>
  );
};
