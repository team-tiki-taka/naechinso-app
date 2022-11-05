import {fetchMatchingCards} from '@remotes/card';
import {resetableSelector} from '../common/resetableSelector';
import {userState} from '../user';
import {localMatchingFlagState} from './local-flag';

export const allMatchesState = resetableSelector({
  key: 'all-matches',
  get: async ({get}) => {
    get(userState);
    return await fetchMatchingCards();
  },
});

export const likedMatchesState = resetableSelector({
  key: 'liked-matches',
  get: async ({get}) => {
    const list = get(allMatchesState);
    const local = get(localMatchingFlagState);
    return list.filter(i => i.isActive || local[i.targetMemberId] === true);
  },
});

export const completedMatchesState = resetableSelector({
  key: 'completed-matches',
  get: async ({get}) => {
    const list = get(allMatchesState);
    const local = get(localMatchingFlagState);
    return list.filter(
      i =>
        typeof i.isActive === 'boolean' ||
        typeof local[i.targetMemberId] === 'boolean',
    );
  },
});

export const currentMatchState = resetableSelector({
  key: 'current-matches',
  get: ({get}) => {
    const list = get(allMatchesState);
    const local = get(localMatchingFlagState);
    return list.find(i => !i.isActive && local[i.targetMemberId] == null);
  },
});
