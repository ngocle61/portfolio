import { Navigate, type RouteObject } from 'react-router';

import { ROUTE_PATHS } from '@/core/constants/route-paths.constant';
import { PortfolioPage } from '@/modules/portfolio/portfolio';
import { MainLayout } from '@/shared/layout/main-layout/main-layout';

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: ROUTE_PATHS.PORTFOLIO, element: <PortfolioPage /> },
      { path: '*', element: <Navigate to={ROUTE_PATHS.PORTFOLIO} replace /> },
    ],
  },
];
