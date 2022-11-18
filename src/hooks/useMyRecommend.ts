import {fetchMyRecommend, MyRecommend} from '@remotes/recommend';
import {first} from 'lodash';
import {useMemo} from 'react';
import {useQuery, UseQueryOptions} from 'react-query';
import {useUser} from './useUser';

export function useMyRecommend(
  options?: UseQueryOptions<MyRecommend | undefined>,
) {
  const [user] = useUser();
  const query = useQuery<MyRecommend | undefined>(
    ['my-recommend', user?.phone],
    async () => fetchMyRecommend(),
    options,
  );
  return [query.data, query.refetch] as const;
}

export function useRecommendedMyInfo() {
  const [recommend] = useMyRecommend();
  const baseInfo = useMemo(() => {
    const received = first(recommend?.recommendReceived);
    if (!received) {
      return;
    }
    return {
      name: received.name,
      age: received.age,
      gender: received.gender,
    };
  }, [recommend]);
  return baseInfo;
}
