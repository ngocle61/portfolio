import { TruncatedText } from '@/shared/components/truncated-text/truncated-text';

import { FolderTreeItem } from './folder-tree-item';
import { FOLDER_STRUCTURE_STEP } from '../../../../../../../constants/folder-tree.constant';
import type { FolderTreePreviewProps } from '../../../../../../../types/folder-tree-preview.type';

export const FolderTreePreview = ({ nodes }: FolderTreePreviewProps) => (
  <div className="flex min-h-0 flex-1 flex-col gap-2">
    <TruncatedText
      className="shrink-0 truncate font-mono text-xs text-muted-foreground"
      text={FOLDER_STRUCTURE_STEP.label}
    />
    <div className="scrollbar-thin min-h-0 flex-1 overflow-auto rounded-lg border bg-muted/40 p-3">
      <ul className="flex w-max min-w-full flex-col font-mono text-xs">
        {nodes.map((node) => (
          <FolderTreeItem key={node.name} node={node} />
        ))}
      </ul>
    </div>
  </div>
);
