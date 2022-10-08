import {sleep} from '@utils/sleep';
import NetInfo from '@react-native-community/netinfo';

export async function checkNetworkStatus() {
  const status = await (async function getStatus() {
    let i = 0;
    do {
      const status = await NetInfo.fetch();
      if (status.isConnected || i >= 2) {
        return status;
      }
      await sleep(300);
      i++;
    } while (true);
  })();
  // if (!status.isConnected) {
  //   Sentry.captureEvent({
  //     event_id: 'network_status_error',
  //     extra: {
  //       isConnected: status.isConnected,
  //       isInternetReachable: status.isInternetReachable,
  //       type: status.type,
  //       details: status.details,
  //     },
  //   });
  // }
  return status.isConnected;
}

export async function assertNetworkStatus() {
  if (!(await checkNetworkStatus())) {
    // DarkToast.error('인터넷 연결을 확인해주세요', {duration: 3000});
    throw new NetworkStatusError('network error');
  }
}

export class NetworkStatusError extends Error {}
