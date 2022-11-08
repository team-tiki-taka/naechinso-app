import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {setAccessToken, setRefreshToken} from '@remotes/access-token';
import {mainRequester} from '@remotes/requester';
import {assertAxiosError} from '@utils/assertAxiosError';

interface Recommender {
  name: string;
  gender: Gender;
  age: number;
  /**
   * 이 추천사를 작성한 사람의 인증 여부
    - true : 추천인의 직업 / 학력인증이 완료되어 최종 회원가입 가능
    - false : 추천인의 인증이 완료되지 않아 불가능
   */
  senderCreditAccepted: boolean;
}

export interface NewMemberData {
  registerToken: string;
  recommendReceived: Recommender[] | [];
  isActive: boolean; // 회원가입 되어있는지 여부
  isBanned: boolean;
}

export interface ExistingMemberData {
  accessToken: string;
  refreshToken: string;
  recommendReceived: Recommender[];
  isActive: boolean; // 회원가입 되어있는지 여부
  isBanned: boolean;
}

export async function verifyAuthCode(phoneNumber: string, code: string) {
  try {
    const res = await mainRequester.post<
      ServerResponse<NewMemberData | ExistingMemberData>
    >('/sms/verify', {phoneNumber: phoneNumber.replace(/[^0-9]/g, ''), code});
    const data = res.data.data;
    if (!res.data.success) {
      return {isSuccess: false};
    }
    const isNeedSignUp = 'registerToken' in data;
    const recommendReceived = data.recommendReceived;
    console.log(data);
    await setAccessToken(
      'accessToken' in data ? data.accessToken : data.registerToken,
    );

    if ('refreshToken' in data) {
      await setRefreshToken(data.refreshToken);
    }

    return {
      isSuccess: true,
      isNeedSignUp: isNeedSignUp,
      recommendReceived,
      isActive: res.data.data.isActive,
    };
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 400 || e.response?.status === 401) {
      return {isSuccess: false};
    }
    throw e;
  }
}
