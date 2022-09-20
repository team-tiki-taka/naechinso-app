import {Platform} from 'react-native';

export function checkIsMobileBrowser() {
  return (
    Platform.OS === 'web' &&
    navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
  );
}

export function checkIsIosBrowser() {
  return (
    checkIsMobileBrowser() &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.userAgent === 'MacIntel' && navigator.maxTouchPoints > 1))
  );
}

export function checkIsAndroidBrowser() {
  return checkIsMobileBrowser() && !checkIsIosBrowser();
}

export function checkIsDesktopBrowser() {
  return Platform.OS === 'web' && !checkIsMobileBrowser();
}

export function getBrowserPlatform() {
  if (!checkIsMobileBrowser()) {
    return 'desktop';
  } else if (checkIsIosBrowser()) {
    return 'ios';
  } else {
    return 'android';
  }
}
