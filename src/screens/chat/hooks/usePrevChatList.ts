import {flatMap, uniq} from 'lodash';
import {useMemo} from 'react';
import {ChatData, Message} from '../ChatData';
import {MessageGroup} from './MessageGroup';

export function usePrevChatList(
  data: ChatData[],
  resolved: string[],
  playingStep?: string,
) {
  return useMemo(() => {
    const excludeCurrentStep = uniq(resolved.filter(i => i !== playingStep));
    const messages = excludeCurrentStep.map(id => {
      const item = data.find(item => item.id === id);
      if (!item) {
        return [];
      }
      return [
        getActionMessage(item),
        MessageGroup.receive(item.data.map(data => ({type: 'normal', data}))),
      ];
    });

    return flatMap(messages).filter(i => i != null) as MessageGroup[];
  }, [resolved, data, playingStep]);
}

function getActionMessage(item: ChatData) {
  if (!('actionText' in item && item.actionText)) {
    return;
  }
  const sendMessage: Message = {type: 'text', text: item.actionText};
  return MessageGroup.send([{type: 'normal', data: [sendMessage]}]);
}
