import type { FittingCountInput } from '../types/row-fit.type';

// How many rows a wrapping flex row needs for these widths.
const toRowCount = (widths: readonly number[], availableWidth: number, gap: number): number => {
  let rows = 0;
  let rowWidth = 0;
  widths.forEach((width) => {
    if (rows === 0 || rowWidth + gap + width > availableWidth) {
      rows += 1;
      rowWidth = width;
    } else {
      rowWidth += gap + width;
    }
  });
  return rows;
};

// How many items fit in maxRows. When some do not fit, room is kept for the "+N" badge after them.
export const toFittingCount = ({
  itemWidths,
  overflowWidth,
  availableWidth,
  gap,
  maxRows,
}: FittingCountInput): number => {
  if (toRowCount(itemWidths, availableWidth, gap) <= maxRows) return itemWidths.length;

  let count = itemWidths.length - 1;
  while (
    count > 0 &&
    toRowCount([...itemWidths.slice(0, count), overflowWidth], availableWidth, gap) > maxRows
  ) {
    count -= 1;
  }
  return count;
};
