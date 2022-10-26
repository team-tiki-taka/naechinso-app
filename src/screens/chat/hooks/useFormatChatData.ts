import {Typography} from '@components/text';
import {useMemo} from 'react';
import {ChatData, Message} from '../ChatData';
import {MessageForUI} from '../components/ChatMessage';
import {MessageGroup} from './MessageGroup';

export function useFormatChatData(
  chatData: ChatData[],
  playingStep: string | undefined,
  playedChatData: MessageGroup[],
  playingData: MessageForUI[],
): MessageGroup[] {
  return useMemo(() => {
    const playingGroup = chatData.find(c => c.id === playingStep);
    const sendMessage = playingGroup ? formatSendMessage(playingGroup) : null;
    if (playingGroup && sendMessage) {
      return [
        ...playedChatData,
        sendMessage,
        MessageGroup.receive(playingData),
      ];
    }
    if (playingData.length) {
      return [...playedChatData, MessageGroup.receive(playingData)];
    }
    return playedChatData;
  }, [playedChatData, playingStep, playingData.length, chatData]);
}
function formatSendMessage(group: ChatData) {
  if (!('actionText' in group) || !group.actionText) {
    return;
  }
  const sendMessage: Message = {
    type: 'text',
    text: group.actionText,
    typography: Typography.Subtitle_2_M,
  };
  const message = MessageGroup.send([{type: 'normal', data: [sendMessage]}]);
  return message;
}
