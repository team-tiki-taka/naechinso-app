import {sleep} from '@utils/sleep';
import {useCallback, useEffect, useRef, useState} from 'react';
import {ChatData} from '../ChatData';
import {MessageForUI} from '../components/ChatMessage';
import {useResolvedChatSteps} from './useResolvedChatSteps';

export function useChatbotPlayer(chatData: ChatData[]) {
  const [resolved, addResolved] = useResolvedChatSteps();
  const [playingStep, setPlayingStep] = useState<string>();
  const [playingData, setPlayingData] = useState<MessageForUI[]>([]);
  const interval = useRef<any>(null);

  const destory = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);

  const play = useCallback(
    (step: string) => {
      const group = chatData.find(c => c.id === step);
      if (!group) {
        return;
      }
      setPlayingStep(step);
      addResolved(step);
      let index = 0;
      const loadingMessage: MessageForUI = {type: 'loading'};
      const messages: MessageForUI[] = [];
      setPlayingData([...messages, loadingMessage]);
      interval.current = setInterval(() => {
        messages.push({type: 'normal', data: group.data[index]});
        index += 1;
        if (group.data.length !== index) {
          setPlayingData([...messages, loadingMessage]);
          return;
        }
        setPlayingData(messages);
        destory();
        sleep(1000).then(() => {
          setPlayingStep(undefined);
          setPlayingData([]);
        });
      }, 1200);
    },
    [chatData],
  );

  useEffect(() => {
    return () => destory();
  }, []);

  return {play, data: playingData, step: playingStep, resolved};
}
