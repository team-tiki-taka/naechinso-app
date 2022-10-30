import {Gender} from './Gender';

export interface Recommend {
  appeal: string;
  gender: Gender;
  meet: string;
  name: string;
  period: string;
  phone: string;
  receiverId: number;
  senderId: number;
  uuid: string;
}
