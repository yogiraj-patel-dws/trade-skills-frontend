import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import type { ApiErrorResponse } from "./apiTypes";
import { ROUTES } from "../constants/routes";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json",
  'ngrok-skip-browser-warning': 'true'
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
      headers,
    });

    http.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const tokenString = localStorage.getItem("tradeSkill_token");
        if (tokenString && config.headers) {
          try {
            const token = JSON.parse(tokenString);
            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }
          } catch (e) {
            console.error("Error parsing token from local storage", e);
          }
        }
        return config;
      },
      (error: unknown) => Promise.reject(error)
    );

    http.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: any) => {
        if (error.response?.status === 401) {
          // Clear all auth data from local storage
          localStorage.removeItem("tradeSkill_token");
          localStorage.removeItem("tradeSkill_userId");
          localStorage.removeItem("tradeSkill_role");
          localStorage.removeItem("tradeSkill_firstName");
          localStorage.removeItem("tradeSkill_lastName");

          // Redirect to login
          window.location.href = ROUTES.LOGIN;
        }

        const customError: ApiErrorResponse = {
          status: false,
          code: error.response?.status || 500,
          message:
            error.response?.data?.message ||
            error.message ||
            "An unexpected error occurred",
          errors: error.response?.data?.errors,
        };
        return Promise.reject(customError);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = unknown, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const http = new Http();
