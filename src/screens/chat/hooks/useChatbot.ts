import {Typography} from '@components/text';
import {sleep} from '@utils/sleep';
import {first} from 'lodash';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {ChatData, InitialChatData, Message} from '../ChatData';
import {MessageForUI} from '../components/ChatMessage';
import {DUMMY_CHAT_DATA} from '../constants/DUMMY_CHAT_DATA';
import {MessageGroup} from './MessageGroup';
import {usePlayedChatData} from './usePlayedChatData';
import {useResolvedChatSteps} from './useResolvedChatSteps';

function useChatData() {
  return useMemo(() => DUMMY_CHAT_DATA ?? [], []);
}

export function useChatbot() {
  const chatData = useChatData();
  const [resolved, addResolved] = useResolvedChatSteps();
  const [playingStep, setPlayingStep] = useState<string>();
  const playedChatData = usePlayedChatData(chatData, resolved, playingStep);
  const [playingData, setPlayingData] = useState<MessageForUI[]>([]);

  useEffect(() => {
    if (!resolved.includes('initial')) {
      startAction('initial');
    }
  }, []);

  useEffect(() => {
    const group = chatData.find(d => d.id === playingStep);
    if (!group) {
      return;
    }
    let index = 0;
    const loadingMessage: MessageForUI = {type: 'loading'};
    const messages: MessageForUI[] = [];
    setPlayingData([...messages, loadingMessage]);
    const interval = setInterval(() => {
      messages.push({type: 'normal', data: group.data[index]});
      index += 1;
      if (group.data.length !== index) {
        setPlayingData([...messages, loadingMessage]);
        return;
      }
      setPlayingData(messages);
      clearInterval(interval);
      sleep(1000).then(() => {
        setPlayingStep(undefined);
        setPlayingData([]);
      });
    }, 1200);
    return () => {
      clearInterval(interval);
    };
  }, [chatData, playingStep]);

  const startAction = useCallback(
    async (id: string) => {
      const group = chatData.find(c => c.id === id);
      if (!group) {
        return;
      }
      addResolved(group.id);
      setPlayingStep(group.id);
    },
    [chatData],
  );

  const action = useMemo(
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

  const isPlaying = playingStep != null;

  const data: MessageGroup[] = useMemo(() => {
    const playingGroup = chatData.find(c => c.id === playingStep);
    const sendMessage = playingGroup ? getSendMessage(playingGroup) : null;
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

  return {data, action, startAction, isPlaying} as const;
}

function getSendMessage(group: ChatData) {
  if (!('actionText' in group)) {
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
