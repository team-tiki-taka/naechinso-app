import {Text, Typography} from '@components/text';
import * as React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {APP_BAR_HEIGHT} from './AppBar';

export const AppBarContent = React.memo(function AppBarContent({
  back,
  onBackPress,
  title,
  textColor,
  right,
}: {
  back?: boolean;
  onBackPress?: (event?: GestureResponderEvent) => void;
  title?: React.ReactNode;
  right?: React.ReactNode;
  textColor?: string;
}) {
  return (
    <InnerContainer>
      {back !== false && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onBackPress}
          style={{padding: 10}}>
          <StyledImage
            source={require('../../../assets/icons/ic_arrow_left_black.png')}
          />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}>
        {typeof title === 'string' ? (
          <Text
            typography={Typography.Headline_1_B}
            color={textColor}
            style={{marginLeft: 10}}>
            {title}
          </Text>
        ) : (
          title
        )}
      </View>
      {right}
    </InnerContainer>
  );
});

const InnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  height: ${APP_BAR_HEIGHT}px;
`;

const StyledImage = styled.Image`
  width: 24px;
  height: 24px;
`;
