import {S3_URL} from '@constants/url';

export function getImageUrl(url?: string, type?: 'member' | 'edu' | 'job') {
  if (!url) {
    return;
  }
  if (url.startsWith('http')) {
    return url;
  }
  return [S3_URL, type, url]
    .filter(i => !!i)
    .join('/')
    .replace(/(\/\/)/g, '/');
}
