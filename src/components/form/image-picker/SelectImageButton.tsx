import {Flex} from '@components/layout';
import colors from '@constants/color';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import styled from 'styled-components/native';

interface Props {
  onSelect: (data: Image) => void;
}

export function SelectImageButton({onSelect}: Props) {
  const handlePress = async () => {
    const image = await ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
    });
    onSelect(image);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Container>
        <Icon source={require('@assets/icons/ic_plus_black40.png')} />
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
