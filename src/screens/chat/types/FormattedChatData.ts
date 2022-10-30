import {Recommend} from '@models/Recommend';
import {Message} from './ChatData';

export type FormattedChatData =
  | FormattedNormalMessage
  | LoadingMessage
  | FormattedRecommendMessage;

export interface FormattedNormalMessage {
  type: 'normal';
  data: Message[];
}

export interface FormattedRecommendMessage {
  type: 'recommend' | 'recommendDetail';
  data: Recommend;
}

interface LoadingMessage {
  type: 'loading';
}
