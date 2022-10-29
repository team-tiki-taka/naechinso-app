import {Typography} from '@components/text';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {combineArray} from '../../../utils/combineArray';
import {ChatData, Message} from '../ChatData';
import {MessageForUI} from '../components/ChatMessage';
import {MessageGroup} from './MessageGroup';
import {useResolvedChatSteps} from './useResolvedChatSteps';

const loadingMessage: MessageForUI = {type: 'loading'};

export function useChatbotPlayer(data: ChatData[]) {
  const [resolved, addResolved] = useResolvedChatSteps();
  const [step, setStep] = useState<string>();
  const [playingData, setPlayingData] = useState<MessageForUI[]>([]);
  const group = useMemo(() => data.find(c => c.id === step), [data, step]);
  const interval = useRef<any>(null);

  const destory = useCallback(() => {
    setStep(undefined);
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);

  const append = useCallback((message?: MessageForUI) => {
    if (!message) {
      return;
    }
    setPlayingData(prev => [...prev, message]);
  }, []);

  const play = useCallback(
    (step: string) => {
      const group = data.find(c => c.id === step);
      if (!group) {
        return;
      }
      setStep(step);
      addResolved(step);
      setPlayingData([]);
      let index = 0;
      interval.current = setInterval(() => {
        append({type: 'normal', data: group.data[index]});
        index += 1;
        if (group.data.length !== index) {
          return;
        }
        destory();
      }, 1200);
    },
    [data],
  );

  useEffect(() => destory, []);

  const messages = useMemo(() => {
    if (!group) {
      return [];
    }
    return combineArray(
      getStartAction(group),
      MessageGroup.receive(combineArray(playingData, !!step && loadingMessage)),
    );
  }, [group, playingData]);

  return {
    play,
    messages,
    step: step,
    resolved,
  };
}

function getStartAction(group: ChatData) {
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
