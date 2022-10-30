import {flatMap, uniq} from 'lodash';
import {useMemo} from 'react';
import {Chat} from '../constants/DUMMY_CHAT_DATA';
import {ChatData} from '../types/ChatData';
import {MessageGroup} from './MessageGroup';

export function usePrevChatList(
  data: ChatData[],
  resolved: string[],
  playingStep?: string,
): MessageGroup[] {
  return useMemo(() => {
    const excludeCurrentStep = uniq(resolved.filter(i => i !== playingStep));
    const messages = excludeCurrentStep.map(id => {
      const item = data.find(item => item.id === id);
      if (!item) {
        return [];
      }
      return Array.from(generateMessages(item));
    });

    return flatMap(messages);
  }, [resolved, data, playingStep]);
}

function* generateMessages(item: ChatData) {
  if ('actionText' in item && item.actionText) {
    const content = Chat.text(item.actionText);
    yield MessageGroup.send([{type: 'normal', data: content}]);
  }
  if (item.type === 'recommend') {
    yield MessageGroup.receive([{type: 'recommend', data: item.recommend}]);
  }
  yield MessageGroup.receive(item.data.map(data => ({type: 'normal', data})));
}
