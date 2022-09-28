import * as React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '@constants/color';
import {withProps} from '@hocs/withProps';
import {checkIsMobileBrowser} from '@utils/platformUtil';
import {Flex} from './Flex';

interface ScreenProps extends React.ComponentProps<typeof SafeAreaView> {
  backgroundColor?: string | false;
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
  keyboard?: boolean;
}

export const Screen: React.FC<ScreenProps> = props => {
  const Wrapper =
    props.keyboard !== false && Platform.OS === 'ios'
      ? IosKeyboardAvoidingView
      : React.Fragment;

  return (
    <DesktopLayout>
      <Wrapper>
        <SafeAreaView
          {...props}
          onStartShouldSetResponder={() => {
            Keyboard.dismiss();
            return false;
          }}
          style={[
            {
              backgroundColor: props.backgroundColor || colors.white,
            },
            Platform.OS === 'web'
              ? {height: '100%', overflow: 'hidden'}
              : {flex: 1},
            props.style,
          ]}
        />
      </Wrapper>
    </DesktopLayout>
  );
};

export default Screen;

const IosKeyboardAvoidingView = withProps(KeyboardAvoidingView, {
  behavior: 'padding',
  style: {flex: 1},
});

function DesktopLayout({children}: {children: React.ReactNode}) {
  if (Platform.OS !== 'web' || checkIsMobileBrowser()) {
    return <>{children}</>;
  }
  return (
    <Flex.CenterVertical
      style={{backgroundColor: colors.black40, minHeight: '100%'}}>
      <View style={{maxWidth: 560, width: '100%', minHeight: '100%'}}>
        {children}
      </View>
    </Flex.CenterVertical>
  );
}
