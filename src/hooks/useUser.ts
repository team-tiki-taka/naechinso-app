import {useRecoilValueWithCache} from '@hooks/util';
import {fetchCurrentUser} from '@remotes/user';
import {userAtomState} from '../atoms/user';
import {checkNetworkStatus} from '@utils/checkNetworkStatus';
import {useQuery} from 'react-query';
import {useSetRecoilState} from 'recoil';

export function useUser(suspense?: boolean) {
  const userInLocal = useRecoilValueWithCache(userAtomState);
  const set = useSetRecoilState(userAtomState);
  const query = useQuery(
    'user',
    async () => {
      const isValid = await checkNetworkStatus();
      if (!isValid) {
        return userInLocal;
      }
      const user = await fetchCurrentUser();
      if (JSON.stringify(userInLocal) !== JSON.stringify(user)) {
        set(user);
      }
      return user;
    },
    {suspense},
  );
  return [query.data, query.refetch] as const;
}
