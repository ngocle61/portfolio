import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userManagementService.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: userManagementQueries.all() }),
  });
};
