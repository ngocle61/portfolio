import type { LoaderFunctionArgs } from 'react-router';

export const createPrefetchLoader =
  (access: AccessRequirement, prefetch: (searchParams: URLSearchParams) => void) =>
  async ({ request }: LoaderFunctionArgs): Promise<null> => {
    if (!accessTokenService.read()) return null;

    const user = await queryClient.ensureQueryData(authQueries.currentUser()).catch(() => null);
    const permissions = resolvePermissions(user && authConverter.toAuthUser(user));
    if (isAccessGranted(permissions, access)) prefetch(new URL(request.url).searchParams);

    return null;
  };
