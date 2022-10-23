import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function finishSignup(data: FinishSignupPayload) {
  const res = await mainRequester.post<ServerResponse>(
    '/member/join/detail',
    data,
  );
  return res.data.success;
}

export interface FinishSignupPayload {
  address: string;
  age: number;
  drink: string;
  gender: Gender;
  height: number;
  hobby: string;
  introduce: string;
  mbti: string;
  name: string;
  personality: string;
  picture: string;
  religion: string;
  smoke: string;
  style: string;
  images: string[];
}
