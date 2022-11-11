import {Gender} from './Gender';

export interface Recommend {
  appealDetail: string;
  age: number;
  appeals: string[];
  eduLevel: string;
  eduMajor: string;
  eduName: string;
  gender: Gender;
  jobLocation?: string;
  jobName?: string;
  jobPart?: string;
  meet: string;
  name: string;
  period: string;
  senderName: string;
}
