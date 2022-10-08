import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {setAccessToken} from '@remotes/access-token';
import {mainRequester} from '@remotes/requester';

export async function startSignup(data: StartSignupPayload) {
  const res = await mainRequester.post<ServerResponse<{accessToken: string}>>(
    '/member/join',
    data,
  );
  if (res.data.success && res.data.data.accessToken) {
    await setAccessToken(res.data.data.accessToken);
  }
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
