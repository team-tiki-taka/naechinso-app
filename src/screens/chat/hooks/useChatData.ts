import {
  allCardInChatState,
  resolvedCardInChatState,
  currentCardInChatState,
  likedCardInChatState,
} from '@atoms/matching';
import {MatchingCard} from '@models/MatchingCard';
import {getNewCard} from '@remotes/card/getNewCard';
import {useEffect, useMemo} from 'react';
import {useRecoilValue, useResetRecoilState} from 'recoil';
import {INITIAL_CHAT_DATA} from '../constants/INITIAL_CHAT_DATA';
import {MessageFormat} from '../utils/MessageFormat';

export function useChatData() {
  const list = useRecoilValue(resolvedCardInChatState);
  const likedList = useRecoilValue(likedCardInChatState);
  const currentMatch = useRecoilValue(currentCardInChatState);
  const reload = useResetRecoilState(allCardInChatState);

  useEffect(() => {
    if (list.length) {
      return;
    }
    getNewCard().finally(reload);
  }, [list.length]);

  return useMemo(
    () => Array.from(generateChatData(list, likedList, currentMatch)),
    [list, likedList, currentMatch],
  );
}

function* generateChatData(
  completed: MatchingCard[],
  liked: MatchingCard[],
  current?: MatchingCard,
) {
  yield* INITIAL_CHAT_DATA;

  const likedIds = liked.map(i => i.targetMemberId);
  for (let i = 0; i < completed.length; i++) {
    const item = completed[i];
    const id = ['추천', item.targetMemberId].join();
    if (i === 0) {
      yield* MessageFormat.추천(id, item, 'start');
    } else {
      yield* MessageFormat.추천2(id, item, 'start');
    }
    if (likedIds.includes(item.targetMemberId)) {
      yield* MessageFormat.호감전달([id, '호감'].join(), id);
    } else {
      yield* MessageFormat.거절([id, '거절'].join(), id);
    }
  }
  if (current) {
    const id = ['추천', current.targetMemberId].join();
    if (completed.length === 0) {
      yield* MessageFormat.추천(id, current, 'start');
    } else {
      yield* MessageFormat.추천2(id, current, 'start');
    }
  }
}
