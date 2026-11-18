import { ChevronRightIcon, FileCode2Icon, FolderIcon, FolderOpenIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { I18N_NAMESPACES } from '@/core/constants/language.constant';
import { cn } from '@ui';

import { FOLDER_TREE_NODE_KINDS } from '../../../../../../../constants/folder-tree-node.constant';
import type { FolderTreeItemProps } from '../../../../../../../types/folder-tree-preview.type';

export const FolderTreeItem = ({ node }: FolderTreeItemProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const { t } = useTranslation(I18N_NAMESPACES.PORTFOLIO_CONTENT);

  const isFolder = node.kind === FOLDER_TREE_NODE_KINDS.FOLDER;
  const children = node.children ?? [];
  const hasChildren = children.length > 0;
  const FolderStateIcon = isOpen && hasChildren ? FolderOpenIcon : FolderIcon;

  const label = (
    <>
      {isFolder ? (
        <FolderStateIcon aria-hidden className="size-4 shrink-0 text-primary" />
      ) : (
        <FileCode2Icon aria-hidden className="size-4 shrink-0 text-muted-foreground" />
      )}
      <span className={cn(isFolder && 'font-semibold')}>
        {node.name}
        {isFolder && '/'}
      </span>
    </>
  );

  return (
    <li className="flex flex-col">
      <div className="flex items-center gap-3 rounded-md px-1 py-1 whitespace-nowrap hover:bg-muted">
        {hasChildren ? (
          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center gap-1.5 rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ChevronRightIcon
              aria-hidden
              className={cn('size-3.5 shrink-0 transition-transform', isOpen && 'rotate-90')}
            />
            {label}
          </button>
        ) : (
          <span className="flex items-center gap-1.5 pl-5">{label}</span>
        )}
        {node.noteKey && (
          <span className="font-sans text-muted-foreground">{t(`tree.${node.noteKey}`)}</span>
        )}
      </div>
      {hasChildren && isOpen && (
        <ul className="ml-3 flex flex-col border-l pl-2">
          {children.map((child) => (
            <FolderTreeItem key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
