import { Outlet } from 'react-router';

import { Flex, FLEX_DIRECTIONS } from '@ui';

export const MainLayout = () => (
  <Flex
    asChild
    direction={FLEX_DIRECTIONS.COL}
    gap={6}
    className="mx-auto min-h-svh w-full max-w-6xl px-4 py-6 md:px-6 md:py-10"
  >
    <main>
      <Outlet />
    </main>
  </Flex>
);
