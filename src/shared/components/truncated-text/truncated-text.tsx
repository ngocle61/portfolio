import { Tooltip, TooltipContent, TooltipTrigger } from '@ui';

import type { TruncatedTextProps } from './truncated-text.type';
import { useIsTruncated } from '../../hooks/use-is-truncated';

// Text shortened by its className (line-clamp-3 for a paragraph, truncate for a single line).
// When the text does not fit, hovering it shows the full text in a tooltip.
export const TruncatedText = ({ text, className, as: Element = 'p' }: TruncatedTextProps) => {
  const { ref, isTruncated } = useIsTruncated<HTMLParagraphElement & HTMLSpanElement>(text);

  return (
    <Tooltip open={isTruncated ? undefined : false}>
      <TooltipTrigger asChild>
        <Element ref={ref} className={className}>
          {text}
        </Element>
      </TooltipTrigger>
      <TooltipContent>{text}</TooltipContent>
    </Tooltip>
  );
};
