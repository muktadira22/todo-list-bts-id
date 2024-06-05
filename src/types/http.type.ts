export type IResponse<T = void> = {
  statusCode: number,
  message: string,
  errorMessage: string | null,
  data: T | null
}