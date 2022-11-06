import {AlcoholType} from './AlcoholType';
import {Gender} from './Gender';
import {ReligionType} from './ReligionType';
import {UserInfo} from './UserBaseInfo';

export interface User extends UserInfo {
  address: string;
  age: number;
  drink: AlcoholType;
  gender: Gender;
  height: number;
  hobby: string;
  images: string[];
  introduce: string;
  eduLevel?: string;
  eduMajor?: string;
  eduName?: string;
  jobLocation?: string;
  jobName?: string;
  jobPart?: string;
  mbti: string;
  name: string;
  personalities: string[];
  religion: ReligionType;
  smoke: string;
  style: string;

  phone: string;
  isActive: boolean;
  eduAccepted: boolean;
  jobAccepted: boolean;
}
