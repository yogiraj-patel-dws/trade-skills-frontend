import { http } from './http';
import type { ApiResponse } from './apiTypes';
import type { AxiosRequestConfig } from 'axios';

export const apiClient = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        http.get<ApiResponse<T>>(url, config).then((res) => res.data),

    post: <T>(url: string, body: unknown, config?: AxiosRequestConfig) =>
        http.post<ApiResponse<T>>(url, body, config).then((res) => res.data),

    put: <T>(url: string, body: unknown, config?: AxiosRequestConfig) =>
        http.put<ApiResponse<T>>(url, body, config).then((res) => res.data),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
        http.delete<ApiResponse<T>>(url, config).then((res) => res.data),
};
