import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import type { PortfolioLink, PortfolioSkills } from '../types/portfolio.type';

export const PORTFOLIO_OWNER_NAME = 'Le Bao Ngoc';

export const PORTFOLIO_LINKS: readonly PortfolioLink[] = [
  { label: 'GitHub', href: 'https://github.com/ngocle61', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ngocle61', icon: FaLinkedin },
];

// The tools card shows this many badges, the rest sit behind a +N badge with a tooltip.
export const VISIBLE_TOOLS_COUNT = 5;

export const PORTFOLIO_SKILLS: PortfolioSkills = {
  stacks: [
    {
      id: 'react',
      label: 'React JS',
      groups: ['react', 'reactRouter', 'stateData', 'forms', 'build', 'i18n', 'aiWorkflow'],
    },
    {
      id: 'angular',
      label: 'Angular',
      groups: [
        'angular',
        'angularSignals',
        'changeDetection',
        'rxjs',
        'controlValueAccessor',
        'angularUi',
      ],
    },
  ],
  tools: [
    'VS Code',
    'Git (Bitbucket, GitHub)',
    'Bitbucket',
    'Jira',
    'ClickUp',
    'Figma',
    'Postman / Swagger',
    'Claude Code',
  ],
};
