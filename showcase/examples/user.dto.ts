import type { Role } from './access.type';

export interface UserDto {
  id: ID;
  email: string;
  fullName: string;
  employeeCode: StrOrNum;
  avatarUrl: Nullable<string>;
  phoneNumber: Maybe<string>;
  managerId: Nillable<ID>;
  role: Role;
}

export interface UserListParams {
  search: Maybe<string>;
  role: Maybe<Role>;
  page: number;
}

export const isNil = (value: unknown): value is Nil => value === null || value === undefined;

export const toManagerLabel = (managerId: Nillable<ID>): string =>
  isNil(managerId) ? 'No manager' : `#${managerId}`;

export const toRoleOptions = (roles: readonly Role[]): ValueOption<Role>[] =>
  roles.map((role) => ({ label: role, value: role }));
