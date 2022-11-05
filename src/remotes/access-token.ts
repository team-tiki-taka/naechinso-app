import AsyncStorage from '@react-native-async-storage/async-storage';

export const ACCESS_TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';

export function getAccessToken() {
  return AsyncStorage.getItem(ACCESS_TOKEN_KEY);
}

export function clearAccessToken() {
  return AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken: string) {
  return AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function getRefreshToken() {
  return AsyncStorage.getItem(REFRESH_TOKEN_KEY);
}

export function clearRefreshToken() {
  return AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function setRefreshToken(refreshToken: string) {
  return AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}
