import {Typography} from '@components/text';

interface TextMessage {
  type: 'text';
  typography?: Typography;
  color?: string;
  text: string;
}
export type Message = TextMessage;

export interface BaseChatData {
  id: string;
  data: Array<Array<Message>>;
}

export interface InitialChatData extends BaseChatData {
  type: 'initial';
}

export interface OtherChatData extends BaseChatData {
  type: 'normal';
  afterActionText?: string;
  actionText?: string;
  require: string[];
}
export type ChatData = InitialChatData | OtherChatData;
