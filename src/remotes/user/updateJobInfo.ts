import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function updateJobInfo(data: Partial<UpdateJobInfoPayload>) {
  const res = await mainRequester.patch<ServerResponse>('/member/job', data);
  return res.data.success;
}

export interface UpdateJobInfoPayload {
  jobImage: string;
  jobLocation: string;
  jobName: string;
  jobPart: string;
}
