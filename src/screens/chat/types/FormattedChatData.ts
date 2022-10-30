import {MatchingCard} from '@models/MatchingCard';
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
  data: MatchingCard;
}

interface LoadingMessage {
  type: 'loading';
}
