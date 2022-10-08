export interface ServerResponse<T = unknown> {
  data: T;
  status: number;
  success: boolean;
  timestamp: string;
}
