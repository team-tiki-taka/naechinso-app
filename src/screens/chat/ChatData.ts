import {Typography} from '@components/text';

interface TextMessage {
  type: 'text';
  typography?: Typography;
  color?: string;
  text: string;
}
export type Message = TextMessage;
export interface InitialChatData {
  id: string;
  type: 'initial';
  data: Array<Array<Message>>;
}
export interface OtherChatData {
  id: string;
  type: 'normal' | 'subscribe';
  actionText: string;
  require: string[];
  data: Array<Array<Message>>;
}
export type ChatData = InitialChatData | OtherChatData;
