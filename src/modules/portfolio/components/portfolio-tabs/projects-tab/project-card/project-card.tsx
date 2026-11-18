import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { RowLimitedBadges } from '@/shared/components/row-limited-badges/row-limited-badges';
import {
  Badge,
  BADGE_VARIANTS,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogTrigger,
} from '@ui';

import { ProjectDetailDialog } from './project-detail-dialog';
import {
  INTERACTIVE_CARD_CLASS_NAMES,
  PROJECT_CARD_TECHNOLOGY_ROWS,
} from '../../../../constants/portfolio-card.constant';
import type { ProjectCardProps } from '../../../../types/project-card.type';

export const ProjectCard = ({ project, open, onOpenChange }: ProjectCardProps) => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);
  const { t: tContent } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);

  const period = tContent(`projects.${project.contentKey}.period`);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Card className={INTERACTIVE_CARD_CLASS_NAMES.CARD}>
        <CardHeader>
          <CardTitle className="text-base">
            <DialogTrigger asChild>
              <button type="button" className={INTERACTIVE_CARD_CLASS_NAMES.TRIGGER}>
                {tContent(`projects.${project.contentKey}.name`)}
              </button>
            </DialogTrigger>
          </CardTitle>
          <CardAction>
            <Badge variant={BADGE_VARIANTS.OUTLINE}>
              {tContent(`projects.${project.contentKey}.role`)}
            </Badge>
          </CardAction>
          <CardDescription className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1">
              <MapPinIcon aria-hidden className="size-3.5" />
              {tContent(`projects.${project.contentKey}.region`)}
            </span>
            {period && (
              <span className="inline-flex items-center gap-1">
                <CalendarIcon aria-hidden className="size-3.5" />
                {period}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <p className="line-clamp-3 leading-relaxed text-muted-foreground">
            {tContent(`projects.${project.contentKey}.description`)}
          </p>
          {/* The "+N more" badge is raised above the card's click area so it can be hovered; a
              click still opens the dialog like the rest of the card. */}
          <RowLimitedBadges
            className="mt-auto"
            items={project.technologies}
            maxRows={PROJECT_CARD_TECHNOLOGY_ROWS}
            overflowClassName="relative z-10"
            formatOverflow={(count) => t('projects.more', { count })}
            onOverflowClick={() => onOpenChange(true)}
          />
        </CardContent>
      </Card>
      <ProjectDetailDialog project={project} />
    </Dialog>
  );
};
