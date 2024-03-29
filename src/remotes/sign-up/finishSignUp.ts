import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function finishSignUp(data: FinishSignupPayload) {
  const res = await mainRequester
    .post<ServerResponse>('/member/join/detail', data)
    .catch(e => {
      console.log(e);
    });
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
  images: string[];
  mbti: string;
  name: string;
  personalities: string[];
  religion: string;
  smoke: string;
  style: string;
}
