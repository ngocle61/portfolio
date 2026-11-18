export const PROJECT_CARD_TECHNOLOGY_ROWS = 2;

export const CODING_SKILL_CARD_TAG_ROWS = 1;

export const CARD_GRID_COLUMNS = 3;

// The collapsed grid expands when the Show more button comes within this distance of the viewport.
export const AUTO_EXPAND_ROOT_MARGIN = '0px 0px 200px 0px';

export const COLLAPSED_CARD_LIMITS = {
  MOBILE: 2,
  TABLET: 4,
  DESKTOP: 6,
} as const;

export const COLLAPSED_CARD_CLASS_NAMES = {
  TABLET_UP: 'max-sm:hidden',
  DESKTOP_UP: 'max-xl:hidden',
  NEVER: 'hidden',
} as const;

export const INTERACTIVE_CARD_CLASS_NAMES = {
  CARD: 'relative h-full cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-ring hover:border-primary/50 hover:bg-muted/30',
  TRIGGER:
    "cursor-pointer text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none",
} as const;
