import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import {
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@ui';

import { CodingSkillDialogBody } from './coding-skill-dialog-body/coding-skill-dialog-body';
import type { CodingSkillDialogProps } from '../../../../../types/coding-skill-dialog.type';

export const CodingSkillDialog = ({ skill }: CodingSkillDialogProps) => {
  const { t } = useTranslation(I18N_NAMESPACES.COMMON);
  const { t: tContent } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);

  return (
    <DialogContent className="flex h-[90svh] flex-col gap-5 sm:max-w-6xl">
      <DialogHeader className="shrink-0 pr-8">
        <DialogTitle>{tContent(`codingSkills.${skill.contentKey}.title`)}</DialogTitle>
        <DialogDescription>
          {tContent(`codingSkills.${skill.contentKey}.summary`)}
        </DialogDescription>
      </DialogHeader>
      <CodingSkillDialogBody skill={skill} />
      <DialogCloseButton label={t('actions.close')} />
    </DialogContent>
  );
};
