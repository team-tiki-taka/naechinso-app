import {AxiosRequestConfig} from 'axios';
import {getAccessToken} from '../access-token';

export async function interceptAuthToken(config: AxiosRequestConfig) {
  const accessToken = await getAccessToken();
  config.headers = {
    ...config.headers,
    Authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJuYWVjaGluc28iLCJpYXQiOjE2Njc2MjM1NjEsInN1YiI6IjAxMDIyMjk5OTk5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NzYyNTk2MX0.pT_jfRXV0Vo-XIgHuffAHxMwsxZSFsOcXmeXzTLbtS2yBEDAlYw1i8KTVsqlpvY7GmDTnLmls67KqO2goaFbsg',
  };
  return config;
}
