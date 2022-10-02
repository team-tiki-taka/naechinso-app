import React from 'react';
import {Image} from 'react-native-image-crop-picker';
import {ImageHolder} from './ImageHolder';
import {SelectImageButton} from './SelectImageButton';

interface Props {
  value?: Image;
  onChange: (value?: Image) => void;
}

export function ImagePicker({value, onChange}: Props) {
  return value ? (
    <ImageHolder
      source={{
        uri: `data:${value.mime};base64,${value.data}`,
      }}
      onPress={() => onChange?.(undefined)}
    />
  ) : (
    <SelectImageButton onSelect={onChange} />
  );
}
