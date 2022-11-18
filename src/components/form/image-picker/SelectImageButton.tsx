import {Flex} from '@components/layout';
import colors from '@constants/color';
import {sendImage, uploadImage} from '@remotes/image';
import {DirType} from '@remotes/image/DirType';
import {selectImageFile, toBase64} from '@utils/selectImageFile';
import {first} from 'lodash';
import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import type {Image} from 'react-native-image-crop-picker';
import styled from 'styled-components/native';

import ic_plus_black40 from '@assets/icons/ic_plus_black40.png';

export interface CrossPlatformImage {
  base64: string;
  getUrl: () => Promise<string>;
}

interface Props {
  type: DirType;
  onSelect: (data: CrossPlatformImage) => void;
}

export function SelectImageButton({type, onSelect}: Props) {
  const handlePress = async () => {
    if (Platform.OS === 'web') {
      const image = await selectImageFile();
      const data = await createWebImage(image, type);
      onSelect(data);
      return;
    }
    const image = await require('react-native-image-crop-picker').openPicker({
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
      forceJpg: true,
      compressImageQuality: 0.6,
    });
    const wrappedImage = createNativeImage(image, type);
    onSelect(wrappedImage);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Container>
        <Icon source={ic_plus_black40} />
      </Container>
    </TouchableOpacity>
  );
}

const Container = styled(Flex.Center)`
  background: ${colors.neural};
  border-radius: 16px;
  width: 100px;
  height: 100px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

async function createWebImage(image: File, type: DirType) {
  let url: string | undefined;
  return {
    base64: await toBase64(image),
    getUrl: async () => {
      if (url) {
        return url;
      }
      const res = await uploadImage(image, type);
      return first(res);
    },
  };
}

export function createNativeImage(image: Image, type: DirType) {
  let url: string | undefined;
  return {
    base64: `data:${image.mime};base64,${image.data}`,
    getUrl: async () => {
      if (url) {
        return url;
      }
      const res = await sendImage({image: image, dir: type});
      return (url = first(res)!);
    },
  };
}
