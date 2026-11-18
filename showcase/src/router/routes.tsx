import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    errorElement: <RouteErrorPage />,
    children: [
      {
        element: <GuestRoute />,
        children: [{ element: <AuthLayout />, children: authenticationRoutes }],
      },
      {
        element: <ProtectedRoute />,
        loader: sessionLoader,
        children: [
          {
            element: <MainLayout />,
            children: [...dashboardRoutes, ...userManagementRoutes, ...portfolioRoutes],
          },
        ],
      },
    ],
  },
];
