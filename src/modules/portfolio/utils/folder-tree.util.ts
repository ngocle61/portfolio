import { FOLDER_TREE_NODE_KINDS } from '../constants/folder-tree-node.constant';
import type { FolderTreeNode, FolderTreeNoteKey, FolderTreePath } from '../types/portfolio.type';

export const toFolderNode = (
  name: string,
  noteKey?: FolderTreeNoteKey,
  children?: readonly FolderTreeNode[],
): FolderTreeNode => ({ name, kind: FOLDER_TREE_NODE_KINDS.FOLDER, noteKey, children });

export const toFileNode = (name: string, noteKey?: FolderTreeNoteKey): FolderTreeNode => ({
  name,
  kind: FOLDER_TREE_NODE_KINDS.FILE,
  noteKey,
});

export const toFolderTreePaths = (
  nodes: readonly FolderTreeNode[],
  parent = '',
): FolderTreePath[] =>
  nodes.flatMap((node) => {
    const path = `${parent}/${node.name}`;
    return [{ path, kind: node.kind }, ...toFolderTreePaths(node.children ?? [], path)];
  });
