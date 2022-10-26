import {first} from 'lodash';
import {useMemo} from 'react';
import {ChatData, InitialChatData} from '../ChatData';

export function useNextChat(chatData: ChatData[], resolved: string[]) {
  return useMemo(
    () =>
      first(
        chatData
          .filter(data => data.type !== 'initial')
          .map(item => item as Exclude<ChatData, InitialChatData>)
          .filter(data => !resolved.includes(data.id))
          .filter(data => data.require.every(id => resolved.includes(id))),
      ),
    [resolved, chatData],
  );
}
