import {ServerResponse} from '@models/ServerResponse';
import {setAccessToken} from '@remotes/access-token';
import {getRequester} from '@remotes/requester';
import {assertAxiosError} from '@utils/assertAxiosError';

export interface NewMemberData {
  registerToken: string;
  recommendReceived: boolean;
}

export interface ExistingMemberData {
  accessToken: string;
  refreshToken: string;
}

export async function verifySMSCode(phoneNumber: string, code: string) {
  try {
    const res = await getRequester().post<
      ServerResponse<NewMemberData | ExistingMemberData>
    >('/sms/verify', {phoneNumber: phoneNumber.replace(/[^0-9]/g, ''), code});
    const data = res.data.data;
    if (!res.data.success) {
      return {isSuccess: false};
    }
    const accessToken =
      'accessToken' in data ? data.accessToken : data.registerToken;
    await setAccessToken(accessToken);
    return {
      isSuccess: true,
      isSignup: 'registerToken' in res.data.data,
    };
  } catch (e) {
    assertAxiosError(e);
    if (e.response?.status === 400 || e.response?.status === 401) {
      return {isSuccess: false};
    }
    throw e;
  }
}
