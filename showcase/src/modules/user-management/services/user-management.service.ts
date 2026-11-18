export const userManagementService = {
  list: async (params: UserListQueryParams, signal?: AbortSignal): Promise<UserListResponseDto> => {
    const { data } = await userManagementApi.list(
      { ...params, isActive: toBooleanQueryParam(params.isActive) },
      signal,
    );
    return data;
  },

  create: async (payload: CreateUserPayload): Promise<void> => {
    await userManagementApi.create(payload);
  },
};
