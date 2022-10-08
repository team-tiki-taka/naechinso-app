import {Gender} from '@models/Gender';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function updateUserInfo(data: UpdateUserInfoPayload) {
  const res = await mainRequester.patch<ServerResponse>('/member/common', data);
  return res.data.success;
}

export interface UpdateUserInfoPayload {
  age: number;
  gender: Gender;
  name: string;
}
