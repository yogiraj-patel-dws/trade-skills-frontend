export const queryKeys = {
  user: {
    all: ["users"] as const,
    lists: () => [...queryKeys.user.all, "list"] as const,
    list: (filters: string) =>
      [...queryKeys.user.lists(), { filters }] as const,
    details: () => [...queryKeys.user.all, "detail"] as const,
    detail: (id: number) => [...queryKeys.user.details(), id] as const,
    profile: (id: number) =>
      [...queryKeys.user.details(), id, "profile"] as const,
  },
  // Add other domains here (e.g., auth, products)
};
