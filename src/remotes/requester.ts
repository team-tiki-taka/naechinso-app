import {isAlpha} from '@constants/env';
import axios from 'axios';

export const mainRequester = axios.create({
  baseURL: `https://${isAlpha() ? 'dev' : 'api'}.naechinso.com`,
});

export function getRequester() {
  return mainRequester;
}
