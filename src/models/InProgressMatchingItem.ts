import {Gender} from './Gender';
import {MatchStatus} from './MatchStatusType';

export interface InProgressMatchingItem {
  address: string;
  age: number;
  createdAt: string;
  dueDate: number;
  eduLevel: string;
  eduMajor: string;
  eduName: string;
  gender: Gender;
  id: number;
  image: string;
  jobLocation: string;
  jobName: string;
  jobPart: string;
  name: string;
  recommend: {
    appealDetail: string;
    appeals: string[];
    eduLevel: string;
    eduMajor: string;
    eduName: string;
    gender: Gender;
    jobLocation: string;
    jobName: string;
    jobPart: string;
    meet: string;
    name: string;
    period: string;
  };
  status: MatchStatus;
  targetMemberId: number;
}
