import { http } from "../../api/http";
import { queryKeys } from "../../react-query/queryKeys";
import { useAppQuery } from "../../react-query/useAppQuery";
import type { DashboardResponse } from "./dashboard.types";

export const dashboardService = {
  getDashboard: () => http.get<DashboardResponse>("/dashboard").then(res => res.data),
};

export const useDashboard = () => {
  return useAppQuery(queryKeys.dashboard.main, dashboardService.getDashboard);
};