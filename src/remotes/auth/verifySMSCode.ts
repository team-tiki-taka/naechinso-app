import {getRequester} from '@remotes/requester';

interface newMemberData {
  registerToken: string;
  recommendReceived: boolean;
}

interface existingMemberData {
  accessToken: string;
  refreshToken: string;
}

export async function verifySMSCode(
  phoneNumber: string,
  code: string,
): Promise<newMemberData | existingMemberData> {
  const res = await getRequester().post('/sms/verify', {phoneNumber, code});
  return res.data;
}
