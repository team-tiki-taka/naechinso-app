import {Recommend} from './Recommend';
import {User} from './User';

export interface MatchingCard extends User {
  targetMemberId: number;
  recommend: Recommend;
  isActive: boolean;
}
