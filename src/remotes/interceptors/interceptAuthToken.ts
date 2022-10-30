import {AxiosRequestConfig} from 'axios';
import {getAccessToken} from '../access-token';

export async function interceptAuthToken(config: AxiosRequestConfig) {
  const accessToken = await getAccessToken();
  config.headers = {
    ...config.headers,
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJuYWVjaGluc28iLCJpYXQiOjE2NjcxMzcwMTEsInN1YiI6IjAxMDIyMjk5OTk5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NzEzOTQxMX0.TkAKQJrqg8yuAS_v7x37E6KEna9jt7IAfy82o-eLw9626QfC2IyWeVDTI782xmSluk4RwdHETfvNXhitr10Vcw',
  };
  return config;
}
