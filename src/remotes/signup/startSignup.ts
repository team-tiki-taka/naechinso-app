import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function startSignup(data: StartSignupPayload) {
  const res = await mainRequester.post<ServerResponse>('/member/join', data);
  return res.data.success;
}

export interface StartSignupPayload {
  acceptsInfo: boolean;
  acceptsLocation: boolean;
  acceptsMarketing: boolean;
  acceptsReligion: boolean;
  acceptsService: boolean;
  age: number;
  gender: Gender;
  name: string;
}
