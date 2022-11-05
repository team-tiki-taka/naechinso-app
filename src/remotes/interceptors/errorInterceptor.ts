import {assertAxiosError} from '@utils/assertAxiosError';

export function errorInterceptor(error: Error) {
  assertAxiosError(error);
  console.log(error.response?.data);
  throw error;
}
