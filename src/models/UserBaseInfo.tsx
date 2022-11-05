import {Gender} from './Gender';
import {ReligionType} from '@models/ReligionType';
import {AlcoholType} from '@models/AlcoholType';

export interface UserBaseInfo {
  name: string;
  age: number;
  gender: Gender;
}

export interface UserInfo extends UserBaseInfo {
  address: string;
  drink: AlcoholType;
  height: number;
  hobby: string;
  images: string[];
  introduce: string;
  mbti: string;
  personalities: string[];
  religion: ReligionType;
  smoke: string;
  style: string;
}
