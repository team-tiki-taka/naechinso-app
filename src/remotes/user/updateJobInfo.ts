import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function updateJobInfo(data: Partial<UpdateJobInfoPayload>) {
  console.log('data : ', data);
  await mainRequester
    .patch<ServerResponse>('/member/job', data)
    .then(res => {
      return res.data.success;
    })
    .catch(e => {
      console.log(e);
      mainRequester
        .patch<ServerResponse>('/member/job', {
          jobImage: '인증 사진 링크',
          jobLocation: data.jobLocation,
          jobName: data.jobName,
          jobPart: data.jobPart,
        })
        .then(res => {
          return res.data.success;
        })
        .catch(e => {
          console.log(e);
        });
    });
}

export interface UpdateJobInfoPayload {
  jobImage: string;
  jobLocation: string;
  jobName: string;
  jobPart: string;
}
