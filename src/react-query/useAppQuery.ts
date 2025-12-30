import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { ApiErrorResponse } from "../api/apiTypes";

export function useAppQuery<TData = unknown, TError = ApiErrorResponse>(
  key: readonly unknown[],
  fn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
): UseQueryResult<TData, TError> {
  return useQuery({
    queryKey: key,
    queryFn: fn,
    ...options,
  });
}
