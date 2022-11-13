import {fetchMyRecommend, MyRecommend} from '@remotes/recommend';
import {first} from 'lodash';
import {useMemo} from 'react';
import {useQuery, UseQueryOptions} from 'react-query';

export function useMyRecommend(options?: UseQueryOptions<MyRecommend>) {
  const query = useQuery<MyRecommend>(
    'my-recommend',
    async () => fetchMyRecommend(),
    options,
  );
  return [query.data, query.refetch] as const;
}

export function useRecommendedMyInfo() {
  const [recommend] = useMyRecommend();
  const baseInfo = useMemo(() => {
    const recieved = first(recommend?.recommendReceived);
    if (!recieved) {
      return;
    }
    return {
      name: recieved.name,
      age: recieved.age,
      gender: recieved.gender,
    };
  }, [recommend]);
  return baseInfo;
}
