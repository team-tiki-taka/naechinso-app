import {Linking} from 'react-native';

export function executeApp() {
  const scheme = isIOS()
    ? 'naechinso://home'
    : 'intent://naechinso.com/#Intent;scheme=naechinso;package=com.naechinso_app;end';
  Linking.openURL(scheme);
}

function isIOS() {
  return navigator.userAgent.match(/ipad|iphone/i) != null;
}
