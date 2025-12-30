import { apiClient } from "../../api/apiClient";
import { queryKeys } from "../../react-query/queryKeys";
import { useAppQuery } from "../../react-query/useAppQuery";
import { useAppMutation as useMutationWrapper } from "../../react-query/useAppMutation";
import type { User, CreateUserRequest } from "./user.types";

export const userService = {
  getUsers: () => apiClient.get<User[]>("/users"),
  getUser: (id: number) => apiClient.get<User>(`/users/${id}`),
  createUser: (data: CreateUserRequest) => apiClient.post<User>("/users", data),
};

export const useUsers = () => {
  return useAppQuery(queryKeys.user.all, userService.getUsers);
};

export const useUser = (id: number) => {
  return useAppQuery(queryKeys.user.detail(id), () => userService.getUser(id), {
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  return useMutationWrapper(userService.createUser);
};
