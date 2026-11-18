import { BriefcaseIcon, CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import {
  Badge,
  BADGE_VARIANTS,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@ui';

import type { ProjectDetailDialogProps } from '../../../../types/project-detail-dialog.type';

export const ProjectDetailDialog = ({ project }: ProjectDetailDialogProps) => {
  const { t } = useTranslation([I18N_NAMESPACES.PORTFOLIO, I18N_NAMESPACES.COMMON]);
  const { t: tContent } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);

  const period = tContent(`projects.${project.contentKey}.period`);
  const teamSize = tContent(`projects.${project.contentKey}.teamSize`);

  return (
    <DialogContent className="scrollbar-thin max-h-[85svh] overflow-y-auto sm:max-w-2xl">
      <DialogHeader className="pr-8">
        <DialogTitle>{tContent(`projects.${project.contentKey}.name`)}</DialogTitle>
        <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1">
            <BriefcaseIcon aria-hidden className="size-3.5" />
            {tContent(`projects.${project.contentKey}.role`)}
          </span>
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
        </DialogDescription>
      </DialogHeader>
      <section className="flex flex-col gap-2">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {t('project.overview')}
        </h3>
        <p className="leading-relaxed">{tContent(`projects.${project.contentKey}.description`)}</p>
      </section>
      {teamSize && (
        <section className="flex flex-col gap-2">
          <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {t('project.teamSize')}
          </h3>
          <p className="flex items-center gap-2">
            <UsersIcon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
            {teamSize}
          </p>
        </section>
      )}
      <section className="flex flex-col gap-2">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {t('project.responsibilities')}
        </h3>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-relaxed">
          {tContent(`projects.${project.contentKey}.responsibilities`, { returnObjects: true }).map(
            (responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ),
          )}
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {t('project.technologies')}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant={BADGE_VARIANTS.SECONDARY}>
              {technology}
            </Badge>
          ))}
        </div>
      </section>
      <DialogCloseButton label={t('actions.close', { ns: I18N_NAMESPACES.COMMON })} />
    </DialogContent>
  );
};
