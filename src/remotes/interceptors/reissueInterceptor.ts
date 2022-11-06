import {getRefreshToken} from '@remotes/access-token';
import {reissueToken} from '@remotes/auth/reissueToken';
import {AxiosRequestConfig} from 'axios';

export async function reissueInterceptor(config: AxiosRequestConfig) {
  try {
    const prevRefreshToken = await getRefreshToken();
    if (config.url?.includes('reissue') || !prevRefreshToken) {
      return config;
    }
    const {accessToken, refreshToken} = await reissueToken();

    config.headers = {
      ...config.headers,
      Authorization: String(accessToken),
      Refresh: String(refreshToken),
    };
    return config;
  } catch {
    return config;
  }
}
