import {isAlpha} from '@constants/env';
import {assertNetworkStatus} from '@utils/checkNetworkStatus';
import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {errorInterceptor} from './errorInterceptor';
import {interceptAuthToken} from './interceptAuthToken';
import {loggingInterceptor} from './loggingInterceptor';

export function applyInterceptors(requester: AxiosInstance) {
  requester.interceptors.request.use(interceptAuthToken);
  requester.interceptors.request.use(networkStatusIntercentor);
  if (isAlpha()) {
    requester.interceptors.request.use(loggingInterceptor);
    requester.interceptors.response.use(undefined, errorInterceptor);
  }
}

async function networkStatusIntercentor(config: AxiosRequestConfig) {
  await assertNetworkStatus();
  return config;
}
