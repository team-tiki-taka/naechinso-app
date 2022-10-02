import {getRequester} from '@remotes/requester';

export async function verfiySmsCode(phoneNumber: string, code: string) {
  const res = await getRequester().post('/sms/verify', {phoneNumber, code});
  return res.data;
}
