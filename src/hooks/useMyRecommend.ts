import {fetchMyRecommend, MyRecommend} from '@remotes/recommend';
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
