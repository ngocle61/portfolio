import { Slot } from 'radix-ui';

export const Button = ({
  className,
  variant = BUTTON_VARIANTS.DEFAULT,
  size = BUTTON_SIZES.DEFAULT,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
