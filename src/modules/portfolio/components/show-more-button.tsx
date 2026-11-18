import { ChevronDownIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { Button, BUTTON_VARIANTS, ICON_PLACEMENTS } from '@ui';

import type { ShowMoreButtonProps } from '../types/show-more-button.type';

export const ShowMoreButton = ({ onExpand }: ShowMoreButtonProps) => {
  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);

  return (
    <div className="flex justify-center">
      <Button variant={BUTTON_VARIANTS.OUTLINE} onClick={onExpand}>
        <ChevronDownIcon data-icon={ICON_PLACEMENTS.INLINE_START} />
        {t('showMore')}
      </Button>
    </div>
  );
};
