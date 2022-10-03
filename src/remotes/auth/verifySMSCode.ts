import {getRequester} from '@remotes/requester';

export interface NewMemberData {
  registerToken: string;
  recommendReceived: boolean;
}

export interface ExistingMemberData {
  accessToken: string;
  refreshToken: string;
}

export interface ResponseType {
  timestamp: string;
  status: number;
  success: boolean;
  data: NewMemberData | ExistingMemberData;
}

export async function verifySMSCode(
  phoneNumber: string,
  code: string,
): Promise<ResponseType> {
  const res = await getRequester().post('/sms/verify', {phoneNumber, code});
  return res.data;
}
