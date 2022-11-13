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

export const allCardInChatState = resetableSelector<MatchingCard[]>({
  key: 'all-matches',
  get: async ({get}) => {
    const user = get(userState);
    if (!user) {
      return [];
    }
    return await fetchMatchingCards();
  },
});

export const likedCardInChatState = resetableSelector<MatchingCard[]>({
  key: 'liked-matches',
  get: async ({get}) => {
    const list = get(allCardInChatState);
    const local = get(localMatchingFlagState);
    return list.filter(i => !i.isActive && local[i.targetMemberId] === true);
  },
});

export const resolvedCardInChatState = resetableSelector<MatchingCard[]>({
  key: 'completed-matches',
  get: async ({get}) => {
    const list = get(allCardInChatState);
    const local = get(localMatchingFlagState);
    return list.filter(
      i => i.isActive === false || typeof local[i.targetMemberId] === 'boolean',
    );
  },
});

export const currentCardInChatState = resetableSelector<
  MatchingCard | undefined
>({
  key: 'current-matches',
  get: ({get}) => {
    const list = get(allCardInChatState);
    const local = get(localMatchingFlagState);
    return list.find(i => i.isActive && local[i.targetMemberId] == null);
  },
});

export const sendedMatchListState = resetableSelector<InProgressMatchingItem[]>(
  {
    key: 'sended-matches',
    get: async ({get}) => {
      const user = get(userState);
      if (!user) {
        return [];
      }
      const list = await fetchSendedMatches();
      return list;
    },
  },
);

export const receivedMatchListState = resetableSelector<
  InProgressMatchingItem[]
>({
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

export const completedMatchListState = resetableSelector<
  InProgressMatchingItem[]
>({
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
