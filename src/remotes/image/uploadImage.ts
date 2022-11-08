import {ServerResponse} from '@models/ServerResponse';
import {getRequester} from '@remotes/requester';
import {DirType} from './DirType';

export async function uploadImage(file: File, dir: DirType) {
  const formData = new FormData();
  formData.append('multipartFiles', file);
  const res = await getRequester().post<ServerResponse<string[]>>(
    `/s3/image/${dir}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res.data.data;
}
