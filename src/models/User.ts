import {Gender} from './Gender';
import {UserInfo} from './UserBaseInfo';

export interface User extends UserInfo {
  address: string;
  age: number;
  eduLevel: string;
  gender: Gender;
  height: number;
  hobby: string;
  introduce: string;
  major: string;
  mbti: string;
  name: string;
  personality: string;
  phone: string;
  picture: string;
  point: number;
  role: 'ADMIN';
  school: string;
  smoke: string;
  style: string;
}
