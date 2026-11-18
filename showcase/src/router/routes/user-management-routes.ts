import type { RouteObject } from 'react-router';

export const userManagementRoutes: RouteObject[] = [
  createGuardedRoute(ROUTE_ACCESS.USERS, [
    {
      path: ROUTE_PATHS.USERS,
      loader: userManagementLoader,
      lazy: lazyPage(
        () => import('@/modules/user-management/user-management'),
        'UserManagementPage',
      ),
    },
  ]),
];
