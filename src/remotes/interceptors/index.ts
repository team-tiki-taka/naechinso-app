import {isAlpha} from '@constants/env';
import {assertNetworkStatus} from '@utils/checkNetworkStatus';
import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {interceptAuthToken} from './interceptAuthToken';
import {loggingInterceptor} from './loggingInterceptor';

export function applyInterceptors(requester: AxiosInstance) {
  requester.interceptors.request.use(interceptAuthToken);
  requester.interceptors.request.use(networkStatusIntercentor);
  if (isAlpha()) {
    requester.interceptors.request.use(loggingInterceptor);
  }
}

async function networkStatusIntercentor(config: AxiosRequestConfig) {
  await assertNetworkStatus();
  return config;
}
