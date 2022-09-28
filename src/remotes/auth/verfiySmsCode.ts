import {getRequester} from '@remotes/requester';

export async function verfiySmsCode(code: string) {
  const res = await getRequester().post('/sms/verify', {code});
  return res.data;
}
