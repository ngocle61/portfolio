import { Tooltip as TooltipPrimitive } from 'radix-ui';

import { TOOLTIP_DELAY_DURATION } from './constants';
import type { TooltipProps } from './types';

export const Tooltip = ({ delayDuration = TOOLTIP_DELAY_DURATION, ...props }: TooltipProps) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration}>
    <TooltipPrimitive.Root data-slot="tooltip" {...props} />
  </TooltipPrimitive.Provider>
);
