import { apiClient } from "../../api/apiClient";
import type { RegisterPayload, LoginPayload, ForgotPasswordPayload, ResetPasswordPayload, AuthResponse } from "./auth.types";

export const authService = {
    register: (data: RegisterPayload) =>
        apiClient.post<AuthResponse>("/auth/register", data),

    login: (data: LoginPayload) =>
        apiClient.post<AuthResponse>("/auth/login", data),

    forgotPassword: (data: ForgotPasswordPayload) =>
        apiClient.post<void>("/auth/forgot-password", data),

    resetPassword: (data: ResetPasswordPayload) =>
        apiClient.post<void>("/auth/reset-password", data),
};
