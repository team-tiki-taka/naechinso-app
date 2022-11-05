import {useRecoilValueWithCache} from '@hooks/util';
import {User} from '@models/User';
import {fetchCurrentUser} from '@remotes/user';
import {checkNetworkStatus} from '@utils/checkNetworkStatus';
import {useQuery} from 'react-query';
import {useSetRecoilState} from 'recoil';
import {userAtomState} from '../atoms/user';

export function useUser(suspense: true): readonly [User, () => void];
export function useUser(
  suspense?: boolean,
): readonly [User | undefined, () => void];
export function useUser(
  suspense?: boolean,
): readonly [User | undefined, () => void] {
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
  return [suspense ? query.data! : query.data, query.refetch] as const;
}
