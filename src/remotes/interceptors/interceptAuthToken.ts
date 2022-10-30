import {AxiosRequestConfig} from 'axios';
import {getAccessToken} from '../access-token';

export async function interceptAuthToken(config: AxiosRequestConfig) {
  const accessToken = await getAccessToken();
  config.headers = {
    ...config.headers,
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJuYWVjaGluc28iLCJpYXQiOjE2NjcxMzgzNzIsInN1YiI6IjAxMDIyMjk5OTk5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NzE0MDc3Mn0.TmOgiuGYw0UrTjE-NbQ3ntYh638T7Jl4ZilxgpL03DqVikHkCPD9rPP6ggld_sZNu5vT_r5HJsoQpbvjHHVVoA',
  };
  return config;
}
