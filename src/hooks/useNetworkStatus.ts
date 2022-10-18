import {
  checkNetworkStatus,
  NetworkStatusError,
} from '@utils/checkNetworkStatus';
import {useEffect} from 'react';
import {useQuery} from 'react-query';

export function useNetworkStatus() {
  const query = useQuery('network-status', checkNetworkStatus, {
    refetchOnMount: true,
    suspense: true,
    keepPreviousData: false,
  });
  return [query.data, query.refetch] as const;
}

export function useToastNetworkStatus() {
  const [status] = useNetworkStatus();
  useEffect(() => {
    if (status === false) {
      //DarkToast.error('인터넷 연결을 확인해주세요', {duration: 3000});
    }
  }, [status]);
}

export function useAssertNetworkStatus() {
  const [status] = useNetworkStatus();
  if (status === false) {
    throw new NetworkStatusError('network error');
  }
}
