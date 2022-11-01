import {AxiosRequestConfig} from 'axios';
import {getAccessToken} from '../access-token';

export async function interceptAuthToken(config: AxiosRequestConfig) {
  const accessToken = await getAccessToken();
  config.headers = {
    ...config.headers,
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJuYWVjaGluc28iLCJpYXQiOjE2NjczMTA2ODksInN1YiI6IjAxMDIyMjk5OTk5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NzMxMzA4OX0.ujRnY98qauOYhSQaMxIca1T9CrmZM7y2K_YACWuw8tuotH4Ly4jNx1QJrqo6Sqa4oCL-1Rrd_Jx6A_EV4cbL6Q',
  };
  return config;
}
