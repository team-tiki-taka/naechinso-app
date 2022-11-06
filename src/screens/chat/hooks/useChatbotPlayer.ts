import {useCallback, useEffect, useMemo, useState} from 'react';
import {useInterval} from '../../../hooks/common/useInterval';
import {INITIAL_CHAT_DATA} from '../constants/INITIAL_CHAT_DATA';
import {ChatData, Message} from '../types/ChatData';
import {FormattedChatData} from '../types/FormattedChatData';
import {MessageGroup} from '../types/MessageGroup';
import {createChatPlayer, utilize} from '../utils/chat-player';
import {useResolvedChatSteps} from './useResolvedChatSteps';

const loadingMessage: FormattedChatData = {type: 'loading'};

export function useChatbotPlayer(data: ChatData[]) {
  const [resolved, addResolved] = useResolvedChatSteps();

  const [step, setStep] = useState<string>();
  const [playingData, setPlayingData] = useState<FormattedChatData[]>([]);
  const group = useMemo(() => data.find(c => c.id === step), [data, step]);
  const interval = useInterval();

  const destory = useCallback(() => {
    setStep(undefined);
    interval.stop();
  }, []);

  const append = useCallback((message?: FormattedChatData) => {
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

      const player = utilize(createChatPlayer(group));
      interval.start(() => {
        const data = player.next();
        const isDone = data.done || !data.value.hasNext;
        if (!isDone) {
          append(data.value.value);
          return;
        }
        destory();
      }, 1200);
    },
    [data],
  );

  useAutoplay(resolved, step, data, play);

  const messages = useMemo(
    () => Array.from(generateMessages(group, playingData, step)),
    [group, playingData],
  );

  return {
    play,
    messages,
    step: step,
    resolved,
  };
}

function useAutoplay(
  resolved: string[],
  step: string | undefined,
  data: ChatData[],
  play: (step: string) => void,
) {
  useEffect(() => {
    if (step || INITIAL_CHAT_DATA.some(i => !resolved.includes(i.id))) {
      return;
    }
    const target = data.find(
      item => item.autoplay && !resolved.includes(item.id),
    );
    if (target) {
      play(target.id);
    }
  }, [data, step]);
}

function* generateMessages(
  group: ChatData | undefined,
  messages: FormattedChatData[],
  currentStep?: string,
) {
  if (!group) {
    return;
  }
  if ('actionText' in group && group.actionText) {
    const content: Message = {type: 'text', text: group.actionText};
    yield MessageGroup.send([{type: 'normal', data: [content]}]);
  }
  if (currentStep != null) {
    yield MessageGroup.receive([...messages, loadingMessage]);
  } else {
    yield MessageGroup.receive(messages);
  }
}
