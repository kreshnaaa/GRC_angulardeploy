export interface StandardResponse<T> {
    formid: number;
    statusCode: number;
    message: string;
    errors: string[];
    data: T;
}
