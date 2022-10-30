import {flatMap, uniq} from 'lodash';
import {useMemo} from 'react';
import {ChatData} from '../types/ChatData';
import {MessageGroup} from '../types/MessageGroup';
import {createChatPlayer} from '../utils/chat-player';
import {MessageFormat} from '../utils/MessageFormat';

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
    const content = MessageFormat.text(item.actionText);
    yield MessageGroup.send([{type: 'normal', data: content}]);
  }
  const player = createChatPlayer(item);
  yield MessageGroup.receive(Array.from(player));
}
