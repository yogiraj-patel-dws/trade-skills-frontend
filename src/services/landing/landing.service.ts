import { http } from "../../api/http";
import { queryKeys } from "../../react-query/queryKeys";
import { useAppQuery } from "../../react-query/useAppQuery";
import type { LandingPageResponse } from "./landing.types";

export const landingService = {
  getLandingPage: () => http.get<LandingPageResponse>("/public/landingpage").then(res => res.data),
};

export const useLandingPage = () => {
  return useAppQuery(queryKeys.landing.main, landingService.getLandingPage);
};