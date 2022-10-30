import {useMemo} from 'react';
import {MessageGroup} from '../types/MessageGroup';

export function useCombineMessages(
  prevMessages: MessageGroup[],
  currentMessages: MessageGroup[],
): MessageGroup[] {
  return useMemo(
    () => [...prevMessages, ...currentMessages],
    [prevMessages, currentMessages],
  );
}
