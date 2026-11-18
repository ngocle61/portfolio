import type { ComponentProps, ReactNode } from 'react';

export interface OverflowBadgeProps extends Omit<ComponentProps<'button'>, 'children'> {
  // The items hidden behind the badge, listed in the tooltip.
  items: readonly string[];
  // What the badge shows, for example "+3" or "+3 more".
  label: ReactNode;
}
