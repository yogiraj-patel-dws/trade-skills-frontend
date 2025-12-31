import { apiClient } from "../../api/apiClient";
import { queryKeys } from "../../react-query/queryKeys";
import { useAppQuery } from "../../react-query/useAppQuery";
import { useAppMutation } from "../../react-query/useAppMutation";
import type { SkillsResponse, SkillDetailResponse, AddSkillRequest, AddSkillResponse, CategoriesResponse } from "./skills.types";

export const skillsService = {
    getSkills: () => apiClient.get<SkillsResponse>("/users/skills").then(res => res.data),
    getSkillDetail: (id: string) => apiClient.get<SkillDetailResponse>(`/skills/${id}`).then(res => res.data),
    getCategories: () => apiClient.get<CategoriesResponse>("/skills/categories").then(res => res.data),
    addSkill: (skillData: AddSkillRequest) => apiClient.post<AddSkillResponse>("/skills", skillData),
};

export const useSkills = () => {
    return useAppQuery(queryKeys.skills.list(), skillsService.getSkills);
};

export const useSkillDetail = (id: string) => {
    return useAppQuery([...queryKeys.skills.all, "detail", id], () => skillsService.getSkillDetail(id));
};

export const useCategories = () => {
    return useAppQuery([...queryKeys.skills.all, "categories"], skillsService.getCategories);
};

export const useAddSkill = () => {
    return useAppMutation(skillsService.addSkill);
};

