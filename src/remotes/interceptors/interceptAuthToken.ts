import {AxiosRequestConfig} from 'axios';
import {getAccessToken} from '../access-token';

export async function interceptAuthToken(config: AxiosRequestConfig) {
  const accessToken = await getAccessToken();
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
  };
  return config;
}
