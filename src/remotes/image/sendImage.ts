import {getRequester} from '@remotes/requester';
import {Image} from 'react-native-image-crop-picker';
import {DirType} from './DirType';

type DataType = {
  uri: string;
  type: 'multipart/form-data';
  name: string;
};

export async function sendImage({
  image,
  dir,
}: {
  image: Image;
  dir: DirType;
}): Promise<string[]> {
  const formData = new FormData();

  const data: DataType = {
    uri: image.sourceURL!,
    type: 'multipart/form-data',
    name: image.filename!,
  };
  //@ts-ignore
  formData.append('multipartFiles', data);

  const res = await getRequester().post(`/s3/image/${dir}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data.data;
}
