import AsyncStorage from '@react-native-async-storage/async-storage';

export const ACCESS_TOKEN_KEY = '@YWNjZXNzX3Rva2Vu';

export function getAccessToken() {
  return AsyncStorage.getItem(ACCESS_TOKEN_KEY);
}

export function clearAccessToken() {
  return AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken: string) {
  return AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}
