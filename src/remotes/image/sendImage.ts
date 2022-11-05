import {getRequester} from '@remotes/requester';
import {Image} from 'react-native-image-crop-picker';
import {DirType} from './DirType';

type DataType = {
  uri: string;
  type: 'multipart/form-data';
  name: string;
};

export async function sendImage({
  images,
  dir,
}: {
  images: Image | Image[];
  dir: DirType;
}): Promise<string[]> {
  const formData = new FormData();

  if (Array.isArray(images)) {
    images.map(image => {
      console.log('이미지 :', image.sourceURL);
      const data: DataType = {
        uri: image.sourceURL,
        type: 'multipart/form-data',
        name: image.filename,
      };
      formData.append('multipartFiles', data);
    });
  } else {
    const data: DataType = {
      uri: images.sourceURL,
      type: 'multipart/form-data',
      name: images.filename,
    };
    formData.append('multipartFiles', data);
  }

  const res = await getRequester()
    .post(`/s3/image/${dir}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      return res.data.data;
    })
    .catch(e => {
      console.log(e);
    });

  return res;
}

function getType(type: string) {
  switch (type) {
    case 'JPG':
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    default:
      return `image/${type}`;
  }
}
