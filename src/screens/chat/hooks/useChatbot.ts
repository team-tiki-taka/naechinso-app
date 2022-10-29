import {useMemo} from 'react';
import {DUMMY_CHAT_DATA} from '../constants/DUMMY_CHAT_DATA';
import {useChatbotPlayer} from './useChatbotPlayer';
import {useCombineMessages} from './useCombineMessages';
import {useNextChat} from './useNextChat';
import {usePrevChatList} from './usePrevChatList';
import {useTriggerInitialChat} from './useTriggerInitialChat';

function useChatData() {
  return useMemo(() => DUMMY_CHAT_DATA ?? [], []);
}

export function useChatbot() {
  const chatData = useChatData();
  const {resolved, step, messages, play} = useChatbotPlayer(chatData);
  useTriggerInitialChat(resolved, play);

  const prevMessages = usePrevChatList(chatData, resolved, step);
  const next = useNextChat(chatData, resolved);
  const isPlaying = step != null;
  const formatted = useCombineMessages(prevMessages, messages);

  return {data: formatted, next, startAction: play, isPlaying} as const;
}
