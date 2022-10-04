import {useCallbackRef} from '@hooks/common';
import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {GestureResponderEvent, Keyboard, Platform} from 'react-native';
import styled from 'styled-components/native';
import {AppBarBackground} from './AppBarBackground';
import {AppBarContent} from './AppBarContent';

export const APP_BAR_HEIGHT = 56;

type Props = React.ComponentProps<typeof Container> & {
  transparent?: boolean;
  onPressBack?: (event?: GestureResponderEvent) => void;
} & React.ComponentProps<typeof AppBarContent> &
  React.ComponentProps<typeof AppBarBackground>;

export function AppBar(props: Props) {
  const {
    onPressBack,
    back,
    title,
    right,
    background = 'rgba(0, 0, 0, 0)',
    elevated,
    safeArea,
    floating,
    transparent,
  } = props;
  const navigation = useNavigation();
  const handleBackPress = useCallbackRef(() => {
    Keyboard.dismiss();
    const handler =
      onPressBack ??
      (Platform.OS === 'web'
        ? () => window.history.back()
        : () => navigation.goBack());
    handler();
  });

  return (
    <>
      <AppBarBackground
        background={transparent ? 'transparent' : background}
        elevated={elevated}
        safeArea={safeArea}
      />
      <Container floating={floating}>
        <AppBarContent
          back={back}
          onBackPress={handleBackPress}
          title={transparent ? '' : title}
          right={right}
        />
      </Container>
    </>
  );
}

const Container = styled.View<{
  floating?: boolean;
}>`
  height: ${APP_BAR_HEIGHT}px;
  z-index: 2;
  ${p =>
    p.floating
      ? `
      position: absolute;
      width: 100%;
      top: ${p.theme.edgeInsets.top}px;
      `
      : ''}
`;

export default AppBar;
