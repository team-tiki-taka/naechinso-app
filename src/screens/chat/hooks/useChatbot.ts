import {useMemo} from 'react';
import {DUMMY_CHAT_DATA} from '../constants/DUMMY_CHAT_DATA';
import {useChatbotPlayer} from './useChatbotPlayer';
import {useFormatChatData} from './useFormatChatData';
import {useNextChat} from './useNextChat';
import {usePlayedChatData} from './usePlayedChatData';
import {useTriggerInitialChat} from './useTriggerInitialChat';

function useChatData() {
  return useMemo(() => DUMMY_CHAT_DATA ?? [], []);
}

export function useChatbot() {
  const chatData = useChatData();
  const {resolved, step, data, play} = useChatbotPlayer(chatData);
  useTriggerInitialChat(resolved, play);

  const playedChatData = usePlayedChatData(chatData, resolved, step);
  const next = useNextChat(chatData, resolved);
  const isPlaying = step != null;
  const formatted = useFormatChatData(chatData, step, playedChatData, data);

  return {data: formatted, next, startAction: play, isPlaying} as const;
}
