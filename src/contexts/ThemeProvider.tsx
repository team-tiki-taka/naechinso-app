import {ReactNode, useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeProvider as DefaultThemeProvider} from 'styled-components/native';
import React from 'react';
import colors from '../constants/color';

export function ThemeProvider({children}: {children: ReactNode}) {
  const edgeInsets = useSafeAreaInsets();
  const theme = useMemo(() => ({colors, edgeInsets}), [edgeInsets]);
  return <DefaultThemeProvider theme={theme} children={children} />;
}
