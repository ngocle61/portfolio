import { TruncatedText } from '@/shared/components/truncated-text/truncated-text';
import { cn } from '@ui';

import type { CodingSkillStepsListProps } from '../../../../../../types/coding-skill-steps-list.type';

export const CodingSkillStepsList = ({
  steps,
  selectedId,
  onSelect,
}: CodingSkillStepsListProps) => (
  <ol className="flex flex-col">
    {steps.map((step, index) => {
      const isSelected = step.id === selectedId;

      return (
        <li key={step.id} className="relative flex flex-col pb-2 last:pb-0">
          {index < steps.length - 1 && (
            <span aria-hidden className="absolute top-8 bottom-0 left-4 w-px bg-border" />
          )}
          <button
            type="button"
            aria-current={isSelected ? 'step' : undefined}
            onClick={() => onSelect(step.id)}
            className={cn(
              'flex w-full cursor-pointer items-start gap-3 rounded-lg p-1 text-left transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
              isSelected && 'bg-muted',
            )}
          >
            <span
              className={cn(
                'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold',
                isSelected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground',
              )}
            >
              {index + 1}
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-sm font-medium">{step.role}</span>
              <TruncatedText
                as="span"
                className="truncate font-mono text-xs text-muted-foreground"
                text={step.label}
              />
            </span>
          </button>
        </li>
      );
    })}
  </ol>
);
