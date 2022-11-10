export interface ApiResponse<T> {
    message?: string;
    dataSet?: T;
    statusCode?: number;
    status?: boolean;
    error?: string;
    errors?: string[];
}