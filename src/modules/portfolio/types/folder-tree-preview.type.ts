import type { FolderTreeNode } from './portfolio.type';

export interface FolderTreePreviewProps {
  nodes: readonly FolderTreeNode[];
}

export interface FolderTreeItemProps {
  node: FolderTreeNode;
}
