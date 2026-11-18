import { cva } from 'class-variance-authority';

const STATUS_VARIANTS = {
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

const statusBadgeVariants = cva('inline-flex h-6 items-center rounded-md border px-2 text-xs', {
  variants: {
    status: {
      [STATUS_VARIANTS.SUCCESS]: 'border-success-border bg-success text-success-foreground',
      [STATUS_VARIANTS.ERROR]: 'border-error-border bg-error text-error-foreground',
    },
  },
});

export const UserCard = ({ user }: UserCardProps) => (
  <article className="rounded-card border bg-background p-6 shadow-card">
    <h3 className="text-foreground">{user.fullName}</h3>
    <p className="text-muted-foreground">{user.email}</p>
    <span
      className={statusBadgeVariants({
        status: user.isActive ? STATUS_VARIANTS.SUCCESS : STATUS_VARIANTS.ERROR,
      })}
    >
      {user.isActive ? 'Active' : 'Inactive'}
    </span>
    <button className="h-button rounded-lg bg-primary px-4 text-primary-foreground hover:bg-primary/90">
      Edit
    </button>
  </article>
);
