import axios from 'axios';
import {applyInterceptors} from './interceptors';

export const mainRequester = axios.create({
  // baseURL: `https://${isAlpha() ? 'dev' : 'api'}.naechinso.com`,
  baseURL: 'https://api.naechinso.com',
});

applyInterceptors(mainRequester);

export function getRequester() {
  return mainRequester;
}
