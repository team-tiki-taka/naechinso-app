import {InProgressMatchingItem} from '@models/InProgressMatchingItem';
import {MatchingCard} from '@models/MatchingCard';
import {fetchMatchingCards} from '@remotes/card';
import {
  fetchCompleteMatches,
  fetchReceivedMatches,
  fetchSendedMatches,
} from '@remotes/matching';
import {resetableSelector} from '../common/resetableSelector';
import {userState} from '../user';
import {localMatchingFlagState} from './local-flag';

export const allMatchesState = resetableSelector<MatchingCard[]>({
  key: 'all-matches',
  get: async ({get}) => {
    const user = get(userState);
    if (!user) {
      return [];
    }
    return await fetchMatchingCards();
  },
});

export const likedMatchesState = resetableSelector<MatchingCard[]>({
  key: 'liked-matches',
  get: async ({get}) => {
    const list = get(allMatchesState);
    const local = get(localMatchingFlagState);
    return list.filter(i => !i.isActive && local[i.targetMemberId] === true);
  },
});

export const completedMatchesState = resetableSelector<MatchingCard[]>({
  key: 'completed-matches',
  get: async ({get}) => {
    const list = get(allMatchesState);
    const local = get(localMatchingFlagState);
    return list.filter(
      i => i.isActive === false || typeof local[i.targetMemberId] === 'boolean',
    );
  },
});

export const currentMatchState = resetableSelector<MatchingCard | undefined>({
  key: 'current-matches',
  get: ({get}) => {
    const list = get(allMatchesState);
    const local = get(localMatchingFlagState);
    return list.find(i => i.isActive && local[i.targetMemberId] == null);
  },
});

export const sendedMatchState = resetableSelector<InProgressMatchingItem[]>({
  key: 'sended-matches',
  get: async ({get}) => {
    const user = get(userState);
    if (!user) {
      return [];
    }
    const list = await fetchSendedMatches();
    return list;
  },
});

export const receivedMatchState = resetableSelector<InProgressMatchingItem[]>({
  key: 'received-matches',
  get: async ({get}) => {
    const user = get(userState);
    if (!user) {
      return [];
    }
    const list = await fetchReceivedMatches();
    return list;
  },
});

export const completedMatchState = resetableSelector<InProgressMatchingItem[]>({
  key: 'complete-matches',
  get: async ({get}) => {
    const user = get(userState);
    if (!user) {
      return [];
    }
    const list = await fetchCompleteMatches();
    return list;
  },
});

// export const currentMatchProfile = resetableSelector<MatchingCard | undefined>({
//   key: 'current-match-profile',
//   get: ({get}) => {
//     const list = get(sendedMatchState);
//     return list
//   }
// })
