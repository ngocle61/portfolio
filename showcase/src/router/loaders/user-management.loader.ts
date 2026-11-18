export const userManagementLoader = createPrefetchLoader(ROUTE_ACCESS.USERS, (searchParams) => {
  const searchState = userManagementSearchSchema.parse(readSearchParams(searchParams));

  void queryClient.prefetchQuery(
    userManagementQueries.list(userFilterConverter.toListParams(searchState)),
  );
});
