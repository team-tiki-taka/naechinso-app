import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {setAccessToken} from '@remotes/access-token';
import {mainRequester} from '@remotes/requester';

export async function startSignUp(data: StartSignUpPayload) {
  const res = await mainRequester.post<ServerResponse<{accessToken: string}>>(
    '/member/join',
    data,
  );

  if (res.data.success && res.data.data.accessToken) {
    await setAccessToken(res.data.data.accessToken);
  }
  return res.data.success;
}

/**
 * name : 추천서 작성자의 이름
 * age : 나이 (25 - 33)
 * gender : 성별 (’M’ 또는 ‘W’)
 * acceptsInfo : 개인정보 수집 동의 여부 (반드시 true)
 * acceptsReligion : 종교 정보 제공 동의 여부 (반드시 true)
 * acceptsService : 서비스 이용 약관 동의 여부 (반드시 true)
 * acceptsLocation : 위치정보 수집 동의 여부
 * acceptsMarketing : 마케팅 수신 동의 여부
 */

export interface StartSignUpPayload {
  acceptsInfo: boolean;
  acceptsLocation: boolean;
  acceptsMarketing: boolean;
  acceptsReligion: boolean;
  acceptsService: boolean;
  age: number;
  gender: Gender;
  name: string;
}
