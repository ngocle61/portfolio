export const UserManagementPage = () => {
  const { state: searchState, setState: setSearchState } = useSearchParamsState(
    userManagementSearchSchema,
  );

  const usersQuery = usePaginatedQuery({
    ...userManagementQueries.list(userFilterConverter.toListParams(searchState)),
    select: userConverter.toPage,
  });

  return (
    <UserManagementTable
      users={usersQuery}
      page={searchState.page}
      onPageChange={(page) => setSearchState({ page })}
    />
  );
};
