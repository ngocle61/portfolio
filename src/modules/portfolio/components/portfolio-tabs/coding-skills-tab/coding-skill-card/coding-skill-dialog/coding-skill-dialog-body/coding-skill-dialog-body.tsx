import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';

import { CodingSkillSourcePreview } from './coding-skill-source-preview';
import { CodingSkillStepsList } from './coding-skill-steps-list';
import { FolderTreePreview } from './folder-tree-preview/folder-tree-preview';
import { FOLDER_STRUCTURE_STEP } from '../../../../../../constants/folder-tree.constant';
import { codingSkillQueries } from '../../../../../../queries/coding-skill.queries';
import type { CodingSkillDialogBodyProps } from '../../../../../../types/coding-skill-dialog-body.type';
import { toCodingSkillSteps } from '../../../../../../utils/coding-skill-step.util';

export const CodingSkillDialogBody = ({ skill }: CodingSkillDialogBodyProps) => {
  const [selectedStepId, setSelectedStepId] = useState(
    skill.tree ? FOLDER_STRUCTURE_STEP.id : (skill.sources[0] ?? ''),
  );

  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO);
  const { t: tContent } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);
  const sourceQueries = useQueries({
    queries: skill.sources.map((path) => codingSkillQueries.source(path)),
  });

  const steps = toCodingSkillSteps(
    skill,
    tContent(`codingSkills.${skill.contentKey}.steps`, { returnObjects: true }),
  );
  const selectedSourceIndex = skill.sources.indexOf(selectedStepId);
  const selectedSourceQuery = sourceQueries[selectedSourceIndex];

  return (
    <div className="grid min-h-0 flex-1 gap-6 max-lg:scrollbar-thin max-lg:overflow-y-auto lg:grid-cols-[20rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-5 lg:scrollbar-thin lg:min-h-0 lg:overflow-y-auto lg:pr-2">
        {steps.length > 1 && (
          <section className="flex flex-col gap-2">
            <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {t('codingSkill.steps')}
            </h3>
            <CodingSkillStepsList
              steps={steps}
              selectedId={selectedStepId}
              onSelect={setSelectedStepId}
            />
          </section>
        )}
        <section className="flex flex-col gap-2">
          <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {t('codingSkill.highlights')}
          </h3>
          <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-relaxed">
            {tContent(`codingSkills.${skill.contentKey}.highlights`, { returnObjects: true }).map(
              (highlight) => (
                <li key={highlight}>{highlight}</li>
              ),
            )}
          </ul>
        </section>
      </div>
      <div className="flex min-h-0 min-w-0 flex-col max-lg:h-[70svh]">
        {selectedSourceQuery ? (
          <CodingSkillSourcePreview
            key={selectedStepId}
            path={selectedStepId}
            sourceQuery={selectedSourceQuery}
          />
        ) : (
          <FolderTreePreview nodes={skill.tree ?? []} />
        )}
      </div>
    </div>
  );
};
