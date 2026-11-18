export const userManagementApi = {
  list: (params: UserListRequestParams, signal?: AbortSignal) =>
    apiClient.get<UserListResponseDto>(API_ENDPOINTS.USERS.BASE, {
      params,
      signal,
      responseSchema: zUserListResponse,
    }),

  create: (payload: CreateUserPayload) => apiClient.post<void>(API_ENDPOINTS.USERS.BASE, payload),
};
