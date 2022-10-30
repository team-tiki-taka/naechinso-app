import {useChatbotPlayer} from './useChatbotPlayer';
import {useChatData} from './useChatData';
import {useCombineMessages} from './useCombineMessages';
import {useNextChat} from './useNextChat';
import {usePrevChatList} from './usePrevChatList';
import {useTriggerInitialChat} from './useTriggerInitialChat';

export function useChatbot() {
  const chatData = useChatData();
  const {resolved, step, messages, play} = useChatbotPlayer(chatData);
  useTriggerInitialChat(resolved, play);

  const prevMessages = usePrevChatList(chatData, resolved, step);
  const next = useNextChat(chatData, resolved);
  const isPlaying = step != null;
  const data = useCombineMessages(prevMessages, messages);

  return {data: data, next, startAction: play, isPlaying} as const;
}
