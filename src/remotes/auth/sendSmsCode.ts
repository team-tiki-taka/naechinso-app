import {getRequester} from '@remotes/requester';

export async function sendSMSCode(phoneNumber: string) {
  const res = await getRequester().post('/sms/send', {
    phoneNumber: phoneNumber.replace(/[^0-9]/g, ''),
  });
  return res.data;
}
