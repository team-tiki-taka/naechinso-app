import {Screen} from '@components/layout';
import colors from '@constants/color';
import {useNetworkStatus} from '@hooks/useNetworkStatus';
import {
  checkNetworkStatus,
  NetworkStatusError,
} from '@utils/checkNetworkStatus';
import React, {isValidElement} from 'react';
import {Image} from 'react-native';
import RNRestart from 'react-native-restart';
import styled from 'styled-components/native';
import {Button} from './button';
import {AppBar, Spacing} from './common';
import {Flex} from './layout';
import {Text, Typography} from './text';

interface Props {
  error?: Error;
  onRefresh?: () => void;
  appbar?:
    | {
        back?: boolean;
        title?: string;
      }
    | React.ReactElement;
}

export function ErrorFallbackScreen({error, onRefresh, appbar}: Props) {
  return (
    <Screen>
      {appbar == null ? (
        <></>
      ) : isValidElement(appbar) ? (
        appbar
      ) : (
        <AppBar back={appbar.back} title={appbar.title} />
      )}
      <ErrorFallback error={error} onRefresh={onRefresh} />
    </Screen>
  );
}

export function ErrorFallback({
  error,
  onRefresh,
}: {
  error?: Error;
  onRefresh?: () => void;
}) {
  if (error && error instanceof NetworkStatusError) {
    return <NetworkErrorFallback onRefresh={onRefresh} />;
  }
  return <CommonErrorFallback onRefresh={onRefresh} />;
}

function CommonErrorFallback({onRefresh}: {onRefresh?: () => void}) {
  const [, reload] = useNetworkStatus();
  const handleReload = async () => {
    reload();
    const handler = onRefresh ?? RNRestart.Restart;
    handler?.();
  };
  return (
    <Container>
      <Image
        style={{width: 96, height: 96}}
        source={require('@assets/images/network_error.png')}
      />
      <Spacing height={8} />
      <Text typography={Typography.Caption_2_M} color={colors.black40} center>
        잠시 연결이 불안합니다{'\n'}
        조금 뒤 다시 접속해주세요
      </Text>
      <Spacing height={24} />
      <Button
        onPress={handleReload}
        height={40}
        width={122}
        textSize="sm"
        textWeight="bold">
        다시 불러오기
      </Button>
      <Spacing height={96} />
    </Container>
  );
}

function NetworkErrorFallback({onRefresh}: {onRefresh?: () => void}) {
  const [, reload] = useNetworkStatus();
  const handleReload = async () => {
    if (!(await checkNetworkStatus())) {
      // DarkToast.error('인터넷 연결을 확인해주세요', {duration: 3000});
    }
    reload();
    const handler = onRefresh ?? RNRestart.Restart;
    handler?.();
  };
  return (
    <Container>
      <Image
        style={{width: 96, height: 96}}
        source={require('@assets/images/network_error.png')}
      />
      <Spacing height={8} />
      <Text typography={Typography.Caption_2_M} color={colors.black40} center>
        인터넷이 연결되어있지 않아요
      </Text>
      <Spacing height={24} />
      <Button
        onPress={handleReload}
        height={40}
        width={122}
        textSize="sm"
        textWeight="bold">
        다시 불러오기
      </Button>
      <Spacing height={96} />
    </Container>
  );
}

const Container = styled(Flex.Center)`
  flex: 1;
`;
