import { FileCode2Icon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { RowLimitedBadges } from '@/shared/components/row-limited-badges/row-limited-badges';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogTrigger,
} from '@ui';

import { CodingSkillDialog } from './coding-skill-dialog/coding-skill-dialog';
import {
  CODING_SKILL_CARD_TAG_ROWS,
  INTERACTIVE_CARD_CLASS_NAMES,
} from '../../../../constants/portfolio-card.constant';
import type { CodingSkillCardProps } from '../../../../types/coding-skill-card.type';

export const CodingSkillCard = ({ skill, open, onOpenChange }: CodingSkillCardProps) => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);
  const { t: tContent } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Card className={INTERACTIVE_CARD_CLASS_NAMES.CARD}>
        <CardHeader>
          <CardTitle className="text-base">
            <DialogTrigger asChild>
              <button type="button" className={INTERACTIVE_CARD_CLASS_NAMES.TRIGGER}>
                {tContent(`codingSkills.${skill.contentKey}.title`)}
              </button>
            </DialogTrigger>
          </CardTitle>
          {skill.sources.length > 0 && (
            <CardDescription className="inline-flex items-center gap-1">
              <FileCode2Icon aria-hidden className="size-3.5" />
              {t('codingSkills.files', { count: skill.sources.length })}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <p className="line-clamp-3 leading-relaxed text-muted-foreground">
            {tContent(`codingSkills.${skill.contentKey}.summary`)}
          </p>
          <RowLimitedBadges
            className="mt-auto"
            items={skill.tags}
            maxRows={CODING_SKILL_CARD_TAG_ROWS}
            overflowClassName="relative z-10"
            onOverflowClick={() => onOpenChange(true)}
          />
        </CardContent>
      </Card>
      <CodingSkillDialog skill={skill} />
    </Dialog>
  );
};
