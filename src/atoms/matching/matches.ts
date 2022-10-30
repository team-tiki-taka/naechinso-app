import {fetchMatchingCards} from '@remotes/card';
import {resetableSelector} from '../common/resetableSelector';

export const allMatchesState = resetableSelector({
  key: 'all-matches',
  get: async () => {
    return await fetchMatchingCards();
  },
});

export const likedMatchesState = resetableSelector({
  key: 'liked-matches',
  get: async () => {
    return await fetchMatchingCards();
  },
});

export const completedMatchesState = resetableSelector({
  key: 'completed-matches',
  get: async ({get}) => {
    const list = get(allMatchesState);
    return list.filter(i => !i.isActive);
  },
});

export const currentMatchState = resetableSelector({
  key: 'current-matches',
  get: ({get}) => {
    const list = get(allMatchesState);
    return list.find(i => i.isActive);
  },
});
