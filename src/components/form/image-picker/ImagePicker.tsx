import {DirType} from '@remotes/image/DirType';
import React from 'react';
import {ImageHolder} from './ImageHolder';
import {CrossPlatformImage, SelectImageButton} from './SelectImageButton';

interface Props {
  value?: CrossPlatformImage;
  type: DirType;
  onChange: (value?: CrossPlatformImage) => void;
}

export function ImagePicker({value, type, onChange}: Props) {
  return value ? (
    <ImageHolder
      source={{uri: value?.base64}}
      onPress={() => onChange?.(undefined)}
    />
  ) : (
    <SelectImageButton onSelect={onChange} type={type} />
  );
}
