import { queryOptions } from '@tanstack/react-query';

export const userManagementQueries = {
  all: () => [USER_MANAGEMENT_QUERY_KEYS.USERS],

  list: (params: UserListQueryParams) =>
    queryOptions({
      queryKey: [USER_MANAGEMENT_QUERY_KEYS.USERS, QUERY_SCOPES.LIST, params],
      queryFn: ({ signal }) => userManagementService.list(params, signal),
    }),
};
