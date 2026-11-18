export interface RowLimitedBadgesProps {
  items: readonly string[];
  maxRows: number;
  className?: string;
  overflowClassName?: string;
  // Formats the "+N" badge, for example "+3" or "+3 more".
  formatOverflow?: (count: number) => string;
  onOverflowClick?: () => void;
}
