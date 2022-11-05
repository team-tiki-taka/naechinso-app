import {AxiosRequestConfig} from 'axios';
import {getAccessToken, getRefreshToken} from '../access-token';

export async function interceptAuthToken(config: AxiosRequestConfig) {
  const accessToken = await getAccessToken();
  const refreshToken = await getRefreshToken();

  config.headers = {
    ...config.headers,
    Authorization: String(accessToken),
    Refresh: String(refreshToken),
  };
  return config;
}
