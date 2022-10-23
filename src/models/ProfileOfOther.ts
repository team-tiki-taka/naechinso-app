import {Gender} from '@models/Gender';
import {UserBaseInfo} from './UserBaseInfo';

export interface ProfileOfOther extends UserBaseInfo {
  images: string[];
  name: string;
  age: number;
  address: string;
  gender: Gender;
  jobName?: string;
  jobPart?: string;
  jobLocation?: string;
  eduName?: string;
  eduMajor?: string;
  eduLevel?: string;
  personality: string;
  religion: string;
  height: number;
  smoke: string;
  drink: string;
  hobby: string;
  style: string;
  introduce: string;
  mbti: string;
  recommend: {
    name: string;
    gender: Gender;
    appeal: string;
    jobName?: string;
    jobPart?: string;
    jobLocation?: string;
    eduName?: string;
    eduMajor?: string;
    eduLevel?: string;
    meet: string;
    period: string;
    appealDetail: string;
  };
  appeal: string;
}
