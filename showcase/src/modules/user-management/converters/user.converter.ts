export const userConverter = {
  toRow: (dto: UserListItemDto): UserRow => ({
    id: dto.id,
    email: dto.email,
    fullName: dto.fullName,
    role: dto.role,
    isActive: dto.isActive,
    createdAt: new Date(dto.createdAt),
  }),

  toPage: (dto: UserListResponseDto): PaginatedResponse<UserRow> => ({
    ...dto,
    items: dto.items.map(userConverter.toRow),
  }),
};
