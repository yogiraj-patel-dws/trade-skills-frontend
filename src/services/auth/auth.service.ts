import { apiClient } from "../../api/apiClient";
import type { RegisterPayload, LoginPayload, AuthResponse } from "./auth.types";

export const authService = {
    register: (data: RegisterPayload) =>
        apiClient.post<AuthResponse>("/auth/register", data),

    login: (data: LoginPayload) =>
        apiClient.post<AuthResponse>("/auth/login", data),
};
