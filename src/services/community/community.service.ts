import { http } from "../../api/http";
import { queryKeys } from "../../react-query/queryKeys";
import { useAppQuery } from "../../react-query/useAppQuery";
import type { CommunityStoriesResponse, FooterResponse } from "./community.types";

export const communityService = {
  getCommunityStories: () => http.get<CommunityStoriesResponse>("/public/community-stories").then(res => res.data),
  getFooter: () => http.get<FooterResponse>("/public/footer").then(res => res.data),
};

export const useCommunityStories = () => {
  return useAppQuery(queryKeys.community.stories, communityService.getCommunityStories);
};

export const useFooter = () => {
  return useAppQuery(queryKeys.community.footer, communityService.getFooter);
};