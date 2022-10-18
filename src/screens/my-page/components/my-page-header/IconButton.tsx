import colors from '@constants/color';
import React from 'react';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export function IconButton({
  onPress,
  source,
}: {
  onPress: () => void;
  source: ImageSourcePropType;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon source={source} />
    </TouchableOpacity>
  );
}

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${colors.black20};
`;
