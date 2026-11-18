import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { ROUTE_PATHS } from '@/core/constants/route-paths.constant';
import { i18nReady } from '@/core/libs/i18n';
import content from '@/locale/portfolio-content/en.json';
import { CODING_SKILLS } from '@/modules/portfolio/constants/coding-skills.constant';
import { PORTFOLIO_PROJECTS } from '@/modules/portfolio/constants/portfolio-projects.constant';
import { PORTFOLIO_TABS } from '@/modules/portfolio/constants/portfolio-tabs.constant';
import { PortfolioPage } from '@/modules/portfolio/portfolio';

const [firstProject] = PORTFOLIO_PROJECTS;
const formSkill = CODING_SKILLS.find((skill) => skill.id === 'form-handling')!;
const firstProjectContent = content.projects[firstProject.contentKey];
const formSkillContent = content.codingSkills[formSkill.contentKey];
const skillTitleOf = (skill = CODING_SKILLS[0]) => content.codingSkills[skill.contentKey].title;

const renderPortfolio = (entry: string = ROUTE_PATHS.PORTFOLIO) => {
  const router = createMemoryRouter([{ path: ROUTE_PATHS.PORTFOLIO, element: <PortfolioPage /> }], {
    initialEntries: [entry],
  });
  render(
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
  return router;
};

beforeAll(() => i18nReady);

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('PortfolioPage', () => {
  it('shows the overview, the skills and the projects tab by default', () => {
    renderPortfolio();

    expect(screen.getByRole('heading', { level: 1, name: 'Portfolio' })).toBeInTheDocument();
    expect(screen.getByText('Le Bao Ngoc')).toBeInTheDocument();
    expect(screen.getByText('Front-End Developer')).toBeInTheDocument();
    expect(screen.getByText('Technical proficiencies')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/ngocle61',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ngocle61',
    );
    expect(screen.getByRole('tab', { name: 'React JS', selected: true })).toBeInTheDocument();
    expect(screen.getByText('State & Data Layer')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Projects', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: firstProjectContent.name })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show more' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('lists the hidden technologies of a project on hover and opens the project on click', async () => {
    // jsdom has no layout: every badge is 100px wide and a row is 250px, so two badges fit per
    // row and two rows hold three technologies plus the "+N more" badge.
    vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(250);
    const user = userEvent.setup();
    renderPortfolio();
    const hiddenTechnologies = firstProject.technologies.slice(3).join(', ');

    const overflowBadge = screen.getAllByRole('button', { name: hiddenTechnologies })[0];
    await user.hover(overflowBadge);

    expect(await screen.findByRole('tooltip')).toHaveTextContent(hiddenTechnologies);

    await user.click(overflowBadge);

    expect(
      await screen.findByRole('dialog', { name: firstProjectContent.name }),
    ).toBeInTheDocument();
  });

  it('switches the technical proficiencies between React and Angular', async () => {
    const user = userEvent.setup();
    renderPortfolio();

    await user.click(screen.getByRole('tab', { name: 'Angular' }));

    expect(screen.getByRole('heading', { name: 'Angular Signals' })).toBeInTheDocument();
    expect(screen.queryByText('State & Data Layer')).not.toBeInTheDocument();
  });

  it('expands the project grid from the Show more button', async () => {
    const user = userEvent.setup();
    renderPortfolio();

    await user.click(screen.getByRole('button', { name: 'Show more' }));

    expect(screen.queryByRole('button', { name: 'Show more' })).not.toBeInTheDocument();
  });

  it('expands the project grid when the Show more button scrolls into view', () => {
    class IntersectingObserver {
      readonly callback: IntersectionObserverCallback;
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
      }
      observe = () =>
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver,
        );
      disconnect = () => undefined;
    }
    vi.stubGlobal('IntersectionObserver', IntersectingObserver);
    renderPortfolio();

    expect(screen.queryByRole('button', { name: 'Show more' })).not.toBeInTheDocument();
  });

  it('opens the project details on click and keeps the project in the URL', async () => {
    const user = userEvent.setup();
    const router = renderPortfolio();

    await user.click(screen.getByRole('button', { name: firstProjectContent.name }));

    const dialog = await screen.findByRole('dialog', { name: firstProjectContent.name });
    expect(within(dialog).getByText(firstProjectContent.teamSize)).toBeInTheDocument();
    expect(within(dialog).getByText(firstProjectContent.responsibilities[0])).toBeInTheDocument();
    expect(router.state.location.search).toBe(`?project=${firstProject.id}`);

    await user.click(within(dialog).getByRole('button', { name: 'Close' }));

    expect(router.state.location.search).toBe('');
  });

  it('opens the project from a shared link', async () => {
    const lastProject = PORTFOLIO_PROJECTS.at(-1);
    renderPortfolio(`${ROUTE_PATHS.PORTFOLIO}?project=${lastProject?.id}`);

    expect(
      await screen.findByRole('dialog', {
        name: lastProject && content.projects[lastProject.contentKey].name,
      }),
    ).toBeInTheDocument();
  });

  it('ignores an unknown project in the URL', () => {
    renderPortfolio(`${ROUTE_PATHS.PORTFOLIO}?project=unknown`);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('switches to the coding skills tab and shows the real source of a topic', async () => {
    const user = userEvent.setup();
    const router = renderPortfolio();

    await user.click(screen.getByRole('tab', { name: 'AI coding conventions' }));
    expect(router.state.location.search).toBe(`?tab=${PORTFOLIO_TABS.CODING_SKILLS}`);
    expect(screen.getByRole('link', { name: 'Live demo' })).toHaveAttribute(
      'href',
      'https://react-base-template-fe.pages.dev/',
    );

    await user.click(screen.getByRole('button', { name: formSkillContent.title }));

    const dialog = await screen.findByRole('dialog', { name: formSkillContent.title });
    expect(within(dialog).getByText(formSkillContent.highlights[0])).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: /The form/, current: 'step' }),
    ).toBeInTheDocument();
    expect(
      await within(dialog).findByText((_, element) =>
        Boolean(
          element?.tagName === 'CODE' &&
          element.textContent?.includes('export const CreateUserForm'),
        ),
      ),
    ).toBeInTheDocument();
    expect(router.state.location.search).toBe(
      `?tab=${PORTFOLIO_TABS.CODING_SKILLS}&skill=${formSkill.id}`,
    );
  });

  it('shows the project structure as a folder tree without source files', async () => {
    const user = userEvent.setup();
    const structureSkill = CODING_SKILLS.find((skill) => skill.tree);
    renderPortfolio(
      `${ROUTE_PATHS.PORTFOLIO}?tab=${PORTFOLIO_TABS.CODING_SKILLS}&skill=${structureSkill?.id}`,
    );

    const dialog = await screen.findByRole('dialog', { name: skillTitleOf(structureSkill) });
    expect(within(dialog).queryByText('Reading order')).not.toBeInTheDocument();
    expect(within(dialog).getByText('use-form-field.ts')).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: 'src/', expanded: true }));
    expect(within(dialog).queryByText('_widgets/')).not.toBeInTheDocument();
  });

  it('opens a coding skill from a shared link', async () => {
    const lastSkill = CODING_SKILLS.at(-1);
    renderPortfolio(
      `${ROUTE_PATHS.PORTFOLIO}?tab=${PORTFOLIO_TABS.CODING_SKILLS}&skill=${lastSkill?.id}`,
    );

    expect(
      await screen.findByRole('dialog', { name: skillTitleOf(lastSkill) }),
    ).toBeInTheDocument();
  });
});
