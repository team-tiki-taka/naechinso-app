import {getRequester} from '@remotes/requester';

export async function verifySMSCode(phoneNumber: string, code: string) {
  const res = await getRequester().post('/sms/verify', {phoneNumber, code});
  return res.data;
}
