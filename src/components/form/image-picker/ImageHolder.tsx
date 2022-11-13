import React from 'react';
import {ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  source: ImageSourcePropType;
  onDelete: () => void;
}

export function ImageHolder({source, onDelete}: Props) {
  return (
    <Container activeOpacity={0.8}>
      <StyledImage source={source} />
      <XIcon onPress={onDelete} />
    </Container>
  );
}

const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 16px;
`;

const Container = styled.View`
  position: relative;
  width: 100px;
  height: 100px;
`;

function XIcon({onPress}: {onPress: () => void}) {
  return (
    <XIconContainer onPress={onPress}>
      <XIconWrapper>
        <XIconImage source={require('@assets/icons/ic_x_white.png')} />
      </XIconWrapper>
    </XIconContainer>
  );
}

const XIconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  position: absolute;
  right: -14px;
  top: -14px;
`;

const XIconWrapper = styled.View`
  background: black;
  border-radius: 20px;
  padding: 4px;
`;

const XIconImage = styled.Image`
  width: 16px;
  height: 16px;
  resize-mode: contain;
`;
