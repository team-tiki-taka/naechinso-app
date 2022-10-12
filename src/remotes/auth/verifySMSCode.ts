import {ServerResponse} from '@models/ServerResponse';
import {setAccessToken} from '@remotes/access-token';
import {getRequester} from '@remotes/requester';

export interface NewMemberData {
  registerToken: string;
  recommendReceived: boolean;
}

export interface ExistingMemberData {
  accessToken: string;
  refreshToken: string;
}

export async function verifySMSCode(phoneNumber: string, code: string) {
  const res = await getRequester().post<
    ServerResponse<NewMemberData | ExistingMemberData>
  >('/sms/verify', {phoneNumber, code});
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
}
