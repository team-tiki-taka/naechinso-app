import {Gender} from '@models/Gender';

export interface MatchingCard {
  targetMemberId: number;
  isActive: boolean;
  createdAt: string;
  dueDate: number;
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
  height: number;
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
  personality: string;
  religion: string;
  smoke: string;
  style: string;
  alcohol: string;
}
