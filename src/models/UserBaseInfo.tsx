import {Gender} from './Gender';
import {ReligionType} from '@models/ReligionType';
import {AlcoholType} from '@models/AlcoholType';

export interface UserBaseInfo {
  address: string;
  age: number;
  drink: AlcoholType;
  gender: Gender;
  height: number;
  hobby: string;
  images: string[];
  introduce: string;
  mbti: string;
  name: string;
  personalities: string[];
  religion: ReligionType;
  smoke: string;
  style: string;
}
