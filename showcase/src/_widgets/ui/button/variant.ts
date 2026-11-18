import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        [BUTTON_VARIANTS.DEFAULT]: 'bg-primary text-primary-foreground hover:bg-primary/90',
        [BUTTON_VARIANTS.OUTLINE]: 'border-input bg-background hover:bg-accent',
        [BUTTON_VARIANTS.GHOST]: 'hover:bg-accent hover:text-accent-foreground',
        [BUTTON_VARIANTS.DESTRUCTIVE]: 'bg-destructive text-destructive-foreground',
      },
      size: {
        [BUTTON_SIZES.SM]: 'h-9 px-3',
        [BUTTON_SIZES.DEFAULT]: 'h-button px-4',
        [BUTTON_SIZES.ICON]: 'size-button',
      },
    },
    defaultVariants: {
      variant: BUTTON_VARIANTS.DEFAULT,
      size: BUTTON_SIZES.DEFAULT,
    },
  },
);
