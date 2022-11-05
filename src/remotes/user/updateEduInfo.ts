import {SchoolType} from '@models/SchoolType';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function updateEduInfo(data: Partial<UpdateEduInfoPayload>) {
  const res = await mainRequester.patch<ServerResponse>('/member/edu', data);
  return res.data.success;
}

export interface UpdateEduInfoPayload {
  eduImage: string;
  eduLevel: SchoolType;
  eduMajor: string;
  eduName: string;
}
