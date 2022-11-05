import {Flex} from '@components/layout';
import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  source: ImageSourcePropType;
  onPress: () => void;
}

export function ImageHolder({source, onPress}: Props) {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <StyledImage source={source} />
      <XIcon />
    </Container>
  );
}

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 16px;
`;

const Container = styled.TouchableOpacity`
  position: relative;
  width: 100px;
  height: 100px;
`;

function XIcon() {
  return (
    <XIconContainer>
      <XIconImage source={require('@assets/icons/ic_x_white.png')} />
    </XIconContainer>
  );
}

const XIconContainer = styled(Flex.Center)`
  width: 24px;
  height: 24px;
  background: black;
  border-radius: 20px;
  position: absolute;
  right: -5px;
  top: -5px;
`;

const XIconImage = styled(Image)`
  width: 18px;
  height: 18px;
`;
