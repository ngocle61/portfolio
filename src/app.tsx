import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router/dom';

import { useApplyTheme } from '@/core/hooks/use-apply-theme';
import { queryClient } from '@/core/libs/query-client';
import { router } from '@/router/router';

export const App = () => {
  useApplyTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
