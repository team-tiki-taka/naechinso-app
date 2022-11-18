import {EduLevelType} from '@models/EduLevelType';
import {ServerResponse} from '@models/ServerResponse';
import {mainRequester} from '@remotes/requester';

export async function updateEduInfo(data: Partial<UpdateEduInfoPayload>) {
  console.log('data : ', data);
  await mainRequester
    .patch<ServerResponse>('/member/edu', data)
    .then(res => {
      return res.data.success;
    })
    .catch(e => {
      console.log(e);
      mainRequester
        .patch<ServerResponse>('/member/edu', {
          eduImage: '인증 사진 링크',
          eduLevel: EduLevelType.UNIV,
          eduMajor: data.eduMajor,
          eduName: data.eduName,
        })
        .then(res => {
          return res.data.success;
        })
        .catch(e => {
          console.log(e);
        });
    });
}

export interface UpdateEduInfoPayload {
  eduImage: string;
  eduLevel: EduLevelType;
  eduMajor: string;
  eduName: string;
}
