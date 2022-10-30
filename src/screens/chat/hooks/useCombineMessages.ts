import {combineArray} from '@utils/combineArray';
import {useMemo} from 'react';
import {MessageGroup} from '../types/MessageGroup';

export function useCombineMessages(
  prevMessages: MessageGroup[],
  currentMessages: MessageGroup[],
): MessageGroup[] {
  return useMemo(
    () => combineArray(prevMessages, currentMessages),
    [prevMessages, currentMessages],
  );
}
