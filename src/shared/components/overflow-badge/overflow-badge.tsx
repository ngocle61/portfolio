import { Badge, BADGE_VARIANTS, cn, Tooltip, TooltipContent, TooltipTrigger } from '@ui';

import type { OverflowBadgeProps } from './overflow-badge.type';

// The "+N" badge after a shortened list. Hovering or focusing it lists the hidden items. Extra
// props reach the button, so it can also be wrapped in a trigger such as DialogTrigger.
export const OverflowBadge = ({ items, label, className, ...props }: OverflowBadgeProps) => {
  const hiddenItems = items.join(', ');

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge asChild variant={BADGE_VARIANTS.OUTLINE}>
          <button
            type="button"
            aria-label={hiddenItems}
            className={cn('cursor-pointer', className)}
            {...props}
          >
            {label}
          </button>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{hiddenItems}</TooltipContent>
    </Tooltip>
  );
};
