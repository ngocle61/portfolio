import {
  COLLAPSED_CARD_CLASS_NAMES,
  COLLAPSED_CARD_LIMITS,
} from '../constants/portfolio-card.constant';

export const toCollapsedCardClassName = (index: number): string => {
  if (index >= COLLAPSED_CARD_LIMITS.DESKTOP) return COLLAPSED_CARD_CLASS_NAMES.NEVER;
  if (index >= COLLAPSED_CARD_LIMITS.TABLET) return COLLAPSED_CARD_CLASS_NAMES.DESKTOP_UP;
  if (index >= COLLAPSED_CARD_LIMITS.MOBILE) return COLLAPSED_CARD_CLASS_NAMES.TABLET_UP;
  return '';
};
