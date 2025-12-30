import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";
import type { ApiErrorResponse } from "../api/apiTypes";

export function useAppMutation<
  TData = unknown,
  TVariables = unknown,
  TError = ApiErrorResponse
>(
  fn: (variables: TVariables) => Promise<TData>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables>, "mutationFn">
): UseMutationResult<TData, TError, TVariables> {
  return useMutation({
    mutationFn: fn,
    ...options,
  });
}
