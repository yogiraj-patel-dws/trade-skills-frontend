export interface ApiResponse<T = unknown> {
    data: T;
    status: boolean;
    code: number;
    message: string;
}

export type ApiErrorResponse = {
    status: false;
    code: number;
    message: string;
    errors?: Record<string, string[]>;
};

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    size: number;
    hasMore: boolean;
}
