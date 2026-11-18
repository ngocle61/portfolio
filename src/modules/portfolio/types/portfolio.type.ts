import type { CustomTypeOptions } from 'i18next';
import type { IconType } from 'react-icons';

import type { FOLDER_TREE_NODE_KINDS } from '../constants/folder-tree-node.constant';

type PortfolioContent = CustomTypeOptions['resources']['portfolio-content'];

export type ProjectContentKey = keyof PortfolioContent['projects'];

export type CodingSkillContentKey = keyof PortfolioContent['codingSkills'];

export type SkillGroupContentKey = keyof PortfolioContent['skillGroups'];

export type FolderTreeNoteKey = keyof PortfolioContent['tree'];

export type FolderTreeNodeKind =
  (typeof FOLDER_TREE_NODE_KINDS)[keyof typeof FOLDER_TREE_NODE_KINDS];

export interface PortfolioLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface PortfolioSkillStack {
  id: string;
  label: string;
  groups: readonly SkillGroupContentKey[];
}

export interface PortfolioSkills {
  stacks: readonly PortfolioSkillStack[];
  tools: readonly string[];
}

export interface PortfolioProject {
  id: string;
  contentKey: ProjectContentKey;
  technologies: readonly string[];
}

export interface FolderTreeNode {
  name: string;
  kind: FolderTreeNodeKind;
  noteKey?: FolderTreeNoteKey;
  children?: readonly FolderTreeNode[];
}

export interface FolderTreePath {
  path: string;
  kind: FolderTreeNodeKind;
}

export interface CodingSkill {
  id: string;
  contentKey: CodingSkillContentKey;
  tags: readonly string[];
  sources: readonly string[];
  tree?: readonly FolderTreeNode[];
}

export interface CodingSkillStep {
  id: string;
  role: string;
  label: string;
}
