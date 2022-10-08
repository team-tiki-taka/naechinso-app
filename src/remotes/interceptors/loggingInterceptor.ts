import {AxiosRequestConfig} from 'axios';

export function loggingInterceptor(config: AxiosRequestConfig) {
  console.log(`${config.url} - ${config.method}`);
  return config;
}
