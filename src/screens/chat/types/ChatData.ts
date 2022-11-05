import {Typography} from '@components/text';
import {MatchingCard} from '@models/MatchingCard';

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
  autoplay?: boolean;
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
  type: 'recommend' | 'recommendDetail';
  recommend: MatchingCard;
}

export type ChatData = InitialChatData | NormalChatData | RecommendChatData;
