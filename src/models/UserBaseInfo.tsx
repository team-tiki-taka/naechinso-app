import {Gender} from './Gender';
import {ReligionType} from '@models/ReligionType';
import {AlcoholType} from '@models/AlcoholType';

export interface UserBaseInfo {
  address: string;
  age: number | undefined;
  drink: AlcoholType;
  gender: Gender | undefined;
  height: number | undefined;
  hobby: string | undefined;
  images: string[] | undefined;
  introduce: string | undefined;
  mbti: string | undefined;
  name: string | undefined;
  personalities: string[] | undefined;
  religion: ReligionType | undefined;
  smoke: string | undefined;
  style: string | undefined;
}
