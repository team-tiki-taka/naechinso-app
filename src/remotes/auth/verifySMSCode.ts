import {getRequester} from '@remotes/requester';

interface NewMemberData {
  registerToken: string;
  recommendReceived: boolean;
}

interface ExistingMemberData {
  accessToken: string;
  refreshToken: string;
}

export async function verifySMSCode(
  phoneNumber: string,
  code: string,
): Promise<NewMemberData | ExistingMemberData> {
  const res = await getRequester().post('/sms/verify', {phoneNumber, code});
  return res.data;
}
