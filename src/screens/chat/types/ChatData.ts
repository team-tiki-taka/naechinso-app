import {Typography} from '@components/text';
import {Recommend} from '@models/Recommend';

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

interface OtherChatData extends BaseChatData {
  actionText?: string;
  require?: string[];
}

export interface NormalChatData extends OtherChatData {
  type: 'normal';
}

export interface RecommendChatData extends OtherChatData {
  type: 'recommend';
  recommend: Recommend;
}

export type ChatData = InitialChatData | NormalChatData | RecommendChatData;
