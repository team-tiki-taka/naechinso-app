import {getRequester} from '@remotes/requester';
import {Platform} from 'react-native';
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

  const path = image.sourceURL ?? image.path;
  const name = image.filename ?? path.substring(path.lastIndexOf('/'));

  const data: DataType = {
    uri: Platform.OS === 'ios' ? path.replace('file://', '') : path,
    type: 'multipart/form-data',
    name: name,
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
