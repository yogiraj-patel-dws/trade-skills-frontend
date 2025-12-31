import { apiClient } from "../../api/apiClient";
import { queryKeys } from "../../react-query/queryKeys";
import { useAppQuery } from "../../react-query/useAppQuery";
import { useAppMutation as useMutationWrapper } from "../../react-query/useAppMutation";
import type { User, CreateUserRequest } from "./user.types";

export interface SkillItem {
  skillId: string;
  level: string;
  skillTitle: string;
  bannerImage: string;
  demoVideo: string;
  teachingLanguage: string;
  prerequisites: string;
  subcategory: string;
  user: {
    id: string;
    profile: {
      firstName: string;
      lastName: string;
      rating: number;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface UserSkill {
  id: string;
  name: string;
  description: string;
  category: string;
  isActive: boolean;
  createdAt: string;
  userSkills: SkillItem[];
}

export interface AddSkillRequest {
  skillId: string;
  level: string;
  skillTitle: string;
  bannerImage: string;
  demoVideo: string;
  teachingLanguage: string;
  prerequisites: string;
  subcategory: string;
}

export const userService = {
  getUsers: () => apiClient.get<User[]>("/users"),
  getUser: (id: number) => apiClient.get<User>(`/users/${id}`),
  createUser: (data: CreateUserRequest) => apiClient.post<User>("/users", data),
  getSkills: () =>
    apiClient.get<UserSkill[]>("/skills").then((res) => res.data),
  addSkill: (data: AddSkillRequest) => apiClient.post("/users/skills", data),
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

export const useSkills = () => {
  return useAppQuery(queryKeys.user.skills, userService.getSkills);
};

export const useAddSkill = () => {
  return useMutationWrapper(userService.addSkill);
};
