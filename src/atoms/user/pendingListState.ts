import {fetchPendingList, PendingItemTypes} from '@remotes/pending';
import {resetableSelector} from '../common';
import {userState} from './userState';

export const pendingListState = resetableSelector<PendingItemTypes[]>({
  key: 'pending-list',
  get: async ({get}) => {
    const user = get(userState);
    if (!user) {
      return [];
    }
    return await fetchPendingList();
  },
});
